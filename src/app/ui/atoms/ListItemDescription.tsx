import type { FC } from "react";
import { formatCurrency } from "../utils";
import type { ProductListItemFragment } from "@/gql/graphql";

export const ListItemDescription: FC<ProductListItemFragment> = ({ name, categories, price }) => {
	return (
		<div className="flex grow flex-col justify-between gap-3 p-5">
			<div className="flex flex-col">
				<h3 className="text-2xl font-bold ">{name}</h3>
				<p className="text-lg text-cod-gray-200">{categories[0]?.name}</p>
			</div>
			<div className="flex flex-col">
				<p className="mb-5 self-end text-lg font-bold">{formatCurrency(price / 100)}</p>
			</div>
		</div>
	);
};
