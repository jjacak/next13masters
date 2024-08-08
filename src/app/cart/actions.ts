"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";
import { revalidateTag } from "next/cache";

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
