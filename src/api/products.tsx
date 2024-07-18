import {
	ProductsGetListDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetAllCountDocument,
	ProductsGetCategoryCountDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import type { ProductData } from "@/ui/types";

export const getProductList = async (count: number | undefined, offset = 0) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { count, offset });
	return graphqlResponse.products.map((product) => ({
		id: product.id,
		title: product.name,
		price: product.price,
		description: product.description,
		category: product.categories[0]?.name || "",
		rating: product.rating,
		image: product.images[0]?.url || "",
		longDescription: "",
	}));
};

export const getProductById = async (id: ProductData["id"]) => {
	const productResponse = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const product = (await productResponse.json()) as ProductData;
	return product;
};

export const getProductsByCategorySlug = async (slug: string, count: number, offset: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug,
		count,
		offset,
	});

	return (
		graphqlResponse.categories[0]?.products.map((product) => ({
			id: product.id,
			title: product.name,
			price: product.price,
			description: product.description,
			category: product.categories[0]?.name || "",
			rating: product.rating,
			image: product.images[0]?.url || "",
			longDescription: "",
		})) || []
	);
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
