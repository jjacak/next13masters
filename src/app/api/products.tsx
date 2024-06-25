import type { ProductData } from "@/ui/types";

export const getProductList = async (take: number | undefined, offset = 0) => {
	const productsResponse = await fetch(
		`https://naszsklep-api.vercel.app/api/products?offset=${offset}${take ? `&take=${take}` : ""}`,
	);
	const products = (await productsResponse.json()) as ProductData[];
	return products;
};