"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";
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
