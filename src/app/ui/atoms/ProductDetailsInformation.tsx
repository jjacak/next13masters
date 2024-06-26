import type { FC } from "react";
import type { ProductData } from "@/ui/types";
import { formatCurrency } from "@/ui/utils";

export const ProductDetailsInformation: FC<ProductData> = ({
	title,
	description,
	price,
	category,
}) => {
	return (
		<div className="flex grow flex-col justify-between gap-3 p-5">
			<div className="flex flex-col">
				<h3 className="text-2xl font-bold ">{title}</h3>
				<p className="text-lg text-cod-gray-200">{category}</p>
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
