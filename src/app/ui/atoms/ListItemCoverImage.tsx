import type { FC } from "react";
import Image from "next/image";
import type { ItemImageProps } from "../types";

export const ListItemCoverImage: FC<ItemImageProps> = ({ src, alt }) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={320}
			height={180}
			className="h-80 object-cover object-center"
		/>
	);
};
