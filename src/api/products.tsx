import type { GraphQLResponse } from "./types";
import { type TypedDocumentString, ProductsGetListDocument } from "@/gql/graphql";
import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import type { ProductData } from "@/ui/types";

export const getProductList = async (take: number | undefined, offset = 0) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	return graphqlResponse.products.map((product) => ({
		id: product.id,
		title: product.name,
		price: product.price,
		description: product.description,
		category: product.categories[0].name,
		rating: product.rating,
		image: product.images[0].url,
		longDescription: "",
	}));
};

export const getProductById = async (id: ProductData["id"]) => {
	const productResponse = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const product = (await productResponse.json()) as ProductData;
	return product;
};

export const getPagesCount = async () => {
	const products = await getProductList(-1, 0);
	const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
	return totalPages;
};

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables?: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}
	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});

	const graphqlResponse = (await response.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError("GraphQL Error", { cause: graphqlResponse.errors });
	}
	return graphqlResponse.data;
};
