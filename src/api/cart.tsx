import { executeGraphql } from "@/api/graphqlApi";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	CartAddProductDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getCartFromCookie = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			cache: "no-store",
		});
		return cart;
	}
};

const createCart = async () => {
	"use server";
	const { createOrder: newCart } = await executeGraphql({
		query: CartCreateDocument,
		next: {
			tags: ["cart"],
		},
	});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.id, {
		maxAge: 60 * 60 * 24 * 365,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
		httpOnly: true,
		// secure: true,
		sameSite: "lax",
		priority: "low",
	});
	return newCart;
};
const getCartById = async (cartId: string) => {
	"use server";
	const cart = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: {
			tags: ["cart"],
		},
	});
	return cart;
};
const getOrCreateCart = async () => {
	"use server";
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { order: cart } = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}
	return createCart();
};

const addToCart = async (cartId: string, productId: string, quantity: number = 1) => {
	"use server";
	const { order } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: {
			tags: ["cart"],
		},
	});
	const currentTotal = order?.total || 0;
	const { products } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
		next: {
			tags: ["cart"],
		},
	});
	const price = products[0]?.price;
	if (!price) {
		throw new Error("Failed to add product to cart");
	}
	const total = currentTotal + price * quantity;

	const { createOrderItem: orderId } = await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId: cartId,
			productId,
			total,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
	if (!orderId) {
		throw new Error("Failed to add product to cart");
	}
	return orderId;
};

export const addToCartAction = async (productId: string) => {
	"use server";
	const cart = await getOrCreateCart();
	await addToCart(cart.id, productId);
	revalidateTag("cart");
};
