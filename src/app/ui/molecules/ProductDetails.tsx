import type { FC } from "react";
import { ProductDetailsImage } from "../atoms/ProductDetailsImage";
import type { ProductData } from "@/ui/types";
import { ProductDetailsInformation } from "@/ui/atoms/ProductDetailsInformation";

export const ProductDetails: FC<ProductData> = (product) => {
	return (
		<article className="flex flex-col md:flex-row">
			<ProductDetailsImage title={product.title} image={product.image} />
			<ProductDetailsInformation {...product} />
		</article>
	);
};
