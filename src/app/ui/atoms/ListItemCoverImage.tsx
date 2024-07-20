import type { FC } from "react";
import Image from "next/image";
import type { ProductListItemFragment } from "@/gql/graphql";


export const ListItemCoverImage: FC<Pick<ProductListItemFragment, "images" | "name">> = ({ images, name}) => {
	const image = images[0]?.url || "/img/placeholder.png"
	return (
		<Image
			src={image}
			alt={name}
			className="object-contain object-center"
			height={150}
			width={150}
		/>
	);
};
