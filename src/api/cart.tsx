import { executeGraphql } from "@/api/graphqlApi";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	CartAddProductDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { cookies } from "next/headers";

const createCart = async () => {
	"use server";
	const { createOrder: newCart } = await executeGraphql(CartCreateDocument, {});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.id);
	return newCart;
};
const getCartById = async (cartId: string) => {
	"use server";
	const cart = await executeGraphql(CartGetByIdDocument, { id: cartId });
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
	const { order } = await executeGraphql(CartGetByIdDocument, { id: cartId });
	const currentTotal = order?.total || 0;
	const { products } = await executeGraphql(ProductGetByIdDocument, { id: productId });
	const price = products[0]?.price;
	if (!price) {
		throw new Error("Failed to add product to cart");
	}
	const total = currentTotal + price * quantity;

	const { createOrderItem: orderId } = await executeGraphql(CartAddProductDocument, {
		orderId: cartId,
		productId,
		total,
		quantity,
	});
	if (!orderId) {
		throw new Error("Failed to add product to cart");
	}
	return orderId;
};

export const addToCartAction = async (productId: string) => {
	"use server";
	const cart = await getOrCreateCart();
	cookies().set("cartId", cart.id, {
		maxAge: 60 * 60 * 24 * 365,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
		httpOnly: true,
		// secure: true,
		sameSite: "lax",
		priority: "low",
	});
	await addToCart(cart.id, productId);
};
