import { type FC } from "react";
import type { ItemCardProps } from "@/ui/types";
import { ListItemCoverImage } from "@/ui/atoms/ListItemCoverImage";
import { ListItemDescription } from "@/ui/atoms/ListItemDescription";

export const ListItemCard: FC<ItemCardProps> = ({ product, image }) => {
	return (
		<li className="flex w-80 flex-col justify-self-center overflow-hidden rounded-lg bg-moon-mist-400 shadow-lg transition-all duration-200 hover:translate-y-3 ">
			<ListItemCoverImage {...image} />
			<ListItemDescription {...product} />
		</li>
	);
};
