"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";

export const changeQuantityAction = async (itemId: string, quantity: number) => {
	const { updateOrderItem: returnedId } = await executeGraphql(CartChangeItemQuantityDocument, {
		itemId,
		quantity,
	});

	return returnedId;
};
