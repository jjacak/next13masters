import type { FC } from "react";
import { ProductDetailsImage } from "../atoms/ProductDetailsImage";
import { ProductDetailsInformation } from "@/ui/atoms/ProductDetailsInformation";
import type { ProductListItemFragment } from "@/gql/graphql";

export const ProductDetails: FC<ProductListItemFragment> = (product) => {
	return (
		<article className="flex flex-col md:flex-row">
			<ProductDetailsImage
				title={product.name}
				image={product.images[0]?.url || "/img/placeholder.jpg"}
			/>
			<ProductDetailsInformation {...product} />
		</article>
	);
};
