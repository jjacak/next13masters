import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import type { ProductData } from "@/ui/types";

export const getProductList = async (take: number | undefined, offset = 0) => {
	const productsResponse = await fetch(
		`https://naszsklep-api.vercel.app/api/products?offset=${offset}${take ? `&take=${take}` : ""}`,
	);
	const products = (await productsResponse.json()) as ProductData[];
	return products;
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
