import type { FC } from "react";
import Image from "next/image";
import type { ProductData } from "../types";

export const ProductDetailsImage: FC<Pick<ProductData, "image" | "title">> = ({ image, title }) => {
	return (
		<Image
			src={image}
			alt={title}
			className="object-contain object-center"
			height={220}
			width={220}
		/>
	);
};
