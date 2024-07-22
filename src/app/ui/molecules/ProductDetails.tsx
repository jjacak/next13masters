import type { FC } from "react";
import { ProductDetailsImage } from "../atoms/ProductDetailsImage";
import { ProductDetailsInformation } from "@/ui/atoms/ProductDetailsInformation";
import type { ProductListItemFragment } from "@/gql/graphql";
import { AddToCartForm } from "./AddToCartForm";

export const ProductDetails: FC<ProductListItemFragment> = (product) => {
	return (
		<article className="grid grid-cols-1  md:grid-cols-2">
			<ProductDetailsImage name={product.name} images={product.images} />
			<ProductDetailsInformation {...product} />
			<AddToCartForm id={product.id} />
		</article>
	);
};
