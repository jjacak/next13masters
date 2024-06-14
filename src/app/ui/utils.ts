import type { ProductData } from "./types";

export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const checkActiveLink = (path: string, href: string) => {
	const pathParts = path.split("/");
	const hrefParts = href.split("/");
	return pathParts[1] === hrefParts[1];
};

export const getProductList = async (take: number | undefined, offset = 0) => {
	const productsResponse = await fetch(
		`https://naszsklep-api.vercel.app/api/products?offset=${offset}${take ? `&take=${take}` : ""}`,
	);
	const products = (await productsResponse.json()) as ProductData[];
	return products;
};
