import type { FC } from "react";
import { getProductById } from "@/api/products";
import { ProductDetails } from "@/ui/molecules/ProductDetails";

type PageProps = {
	params: { productId: string };
};
const ProductPage: FC<PageProps> = async ({ params: { productId } }) => {
	const product = await getProductById(productId);
	return (
		<ProductDetails {...product} />
	);
};

export default ProductPage;
