import { executeGraphql } from "./graphqlApi";
import { CategoriesGetAllDocument } from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await executeGraphql({query:CategoriesGetAllDocument});

	return graphqlResponse.categories;
};
