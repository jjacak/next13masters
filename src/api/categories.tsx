import { executeGraphql } from "./graphqlApi";
import { CategoriesGetAllDocument } from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await executeGraphql(CategoriesGetAllDocument);

	return graphqlResponse.categories;
};
