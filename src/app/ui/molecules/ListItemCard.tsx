import { type FC } from "react";
import Link from "next/link";
import { ListItemCoverImage } from "@/ui/atoms/ListItemCoverImage";
import { ListItemDescription } from "@/ui/atoms/ListItemDescription";
import type { ProductListItemFragment } from "@/gql/graphql";

export const ListItemCard: FC<ProductListItemFragment> = (product) => {
	return (
		<li className="flex items-center justify-center">
			<Link
				href={`/product/${product.id}`}
				className="flex h-full w-60 flex-col items-center justify-self-center overflow-hidden rounded-lg bg-moon-mist-300 shadow-lg transition-all duration-200 hover:translate-y-3"
			>
				<ListItemCoverImage {...product} />
				<ListItemDescription {...product} />
			</Link>
		</li>
	);
};
