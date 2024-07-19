import {
	ProductsGetListDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetAllCountDocument,
	ProductsGetCategoryCountDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { PRODUCTS_PER_PAGE } from "@/ui/consts";

export const getProductList = async (count: number | undefined, offset = 0) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { count, offset });
	return graphqlResponse.products;
};

export const getProductById = async (id: string) => {
	const productResponse = await executeGraphql(ProductGetByIdDocument, { id });
	const product = productResponse.products[0];
	if (!product) {
		throw new Error(`Product with id ${id} not found`);
	}
	return product;
};

export const getProductsByCategorySlug = async (slug: string, count: number, offset: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug,
		count,
		offset,
	});

	const categoryName = graphqlResponse.categories[0]?.name || "";
	const products = graphqlResponse.categories[0]?.products || [];
	return { categoryName, products };
};

export const getPagesCount = async (categorySlug?: string) => {
	debugger;
	const graphqlResponse = categorySlug
		? await executeGraphql(ProductsGetCategoryCountDocument, { slug: categorySlug })
		: await executeGraphql(ProductsGetAllCountDocument);
	const totalPages = Math.ceil(
		graphqlResponse.productsConnection.aggregate.count / PRODUCTS_PER_PAGE,
	);
	return totalPages;
};
