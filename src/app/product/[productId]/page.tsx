import type { FC } from "react";

type PageProps = {
	params: { productId: string };
};
const ProductPage: FC<PageProps> = ({ params: { productId } }) => {
	return <h1>Product {productId}</h1>;
};

export default ProductPage;
