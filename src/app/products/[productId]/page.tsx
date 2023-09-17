import type { FC } from "react";

type PageProps = {
	params: { productId: string };
};

const ProductPage: FC<PageProps> = ({ params: { productId } }) => {
	return (
		<div>
			<h1>Product Page</h1>
			<p>Product ID: {productId}</p>
		</div>
	);
};

export default ProductPage;
