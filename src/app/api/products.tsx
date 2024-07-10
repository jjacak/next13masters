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
}

export const getProductsCount = async () => {
	const products = await getProductList(-1, 0)
	return products.length
}