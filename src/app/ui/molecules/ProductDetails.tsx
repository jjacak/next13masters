import type { FC } from "react";
import { ProductDetailsImage } from "../atoms/ProductDetailsImage";
import { ProductDetailsInformation } from "@/ui/atoms/ProductDetailsInformation";
import type { ProductListItemFragment } from "@/gql/graphql";

export const ProductDetails: FC<ProductListItemFragment> = (product) => {
	return (
		<article className="flex flex-col md:flex-row">
			<ProductDetailsImage
				name={product.name}
				images={product.images}
			/>
			<ProductDetailsInformation {...product} />
		</article>
	);
};
