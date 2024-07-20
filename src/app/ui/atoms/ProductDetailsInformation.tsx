import type { FC } from "react";
import type { ProductListItemFragment } from "@/gql/graphql";
import { formatCurrency } from "@/ui/utils";

export const ProductDetailsInformation: FC<ProductListItemFragment> = ({
	name,
	description,
	price,
	categories,
}) => {
	return (
		<div className="flex grow flex-col justify-between gap-3 p-5">
			<div className="flex flex-col">
				<h1 className="text-2xl font-bold ">{name}</h1>
				<p className="text-lg text-cod-gray-200">{categories[0]?.name}</p>
			</div>
			<div className="flex flex-col">
				<p className="mb-5  text-lg font-bold">{formatCurrency(price / 100)}</p>
			</div>
			<div>
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
};
