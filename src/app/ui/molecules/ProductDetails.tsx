import type { FC } from "react";
import type { ProductData } from "@/ui/types";
import { ListItemCoverImage } from "@/ui/atoms/ListItemCoverImage";
import { ProductDetailsInformation } from "@/ui/atoms/ProductDetailsInformation";

export const ProductDetails: FC<ProductData> = (product) => {
	return (
		<article className="flex flex-col md:flex-row">
			<ListItemCoverImage title={product.title} image={product.image} />
			<ProductDetailsInformation {...product} />
		</article>
	);
};
