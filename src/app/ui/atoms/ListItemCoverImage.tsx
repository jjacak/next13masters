import type { FC } from "react";
import Image from "next/image";
import type { ProductData } from "../types";

export const ListItemCoverImage: FC<Pick<ProductData, "image" | "title">> = ({ image, title }) => {
	return (
		<Image
			src={image}
			alt={title}
			width={288}
			height={180}
			className="h-72 object-cover object-center"
		/>
	);
};
