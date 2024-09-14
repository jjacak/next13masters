"use server";

import Stripe from "stripe";
import { executeGraphql } from "@/api/graphqlApi";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCartFromCookie } from "@/api/cart";

export const changeQuantityAction = async (itemId: string, quantity: number) => {
	const { updateOrderItem: returnedId } = await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");

	return returnedId;
};

export const removeCartItem = async (itemId: string) => {
	const { deleteOrderItem: removedId } = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			itemId,
		},
		next: {
			tags: ["cart"],
		},
	});
	if (!removedId) {
		throw new Error("Failed to remove item from cart");
	}
	revalidateTag("cart");
	return removedId;
};

export async function handlePaymentAction() {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY not found");
	}
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return;
	}

	const cart = await getCartFromCookie();

	if (!cart) {
		return;
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-06-20",
		typescript: true,
	});
	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product?.name || "",
					description: item.product?.description || "",
					images: item.product?.images.map((i) => i.url) || [],
				},
				unit_amount: item.product?.price || 0,
			},
			quantity: item.quantity,
		})),

		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});

	if (!checkoutSession.url) {
		throw new Error("Something went wrong");
	}
	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
