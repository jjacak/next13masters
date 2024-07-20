import type { FC } from "react";
import Image from "next/image";
import type { ProductListItemFragment } from "@/gql/graphql";

export const ProductDetailsImage: FC<Pick<ProductListItemFragment, "images" | "name">> = ({
	images,
	name,
}) => {
	return (
		<Image
			src={images[0]?.url || "/img/placeholder.png"}
			alt={name}
			className="object-contain object-center"
			height={220}
			width={220}
		/>
	);
};
