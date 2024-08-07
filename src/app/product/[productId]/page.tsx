import type { FC } from "react";
import type { Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductDetails } from "@/ui/molecules/ProductDetails";

export const generateMetadata = async ({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(productId);
	const title = `${product.name} - Sklep internetowy`;
	return {
		title: title,
		description: product.description,
		openGraph: {
			title: title,
			description: product.description,
			images: [
				{
					url: product.images[0]?.url || "/img/placeholder.jpg",
					alt: product.name,
				},
			],
		},
		twitter: {
			title: title,
			description: product.description,
			images: [product.images[0]?.url || "/img/placeholder.jpg", product.name],
		},
	};
};

type PageProps = {
	params: { productId: string };
};
const ProductPage: FC<PageProps> = async ({ params: { productId } }) => {
	const product = await getProductById(productId);
	return <ProductDetails {...product} />;
};

export default ProductPage;
