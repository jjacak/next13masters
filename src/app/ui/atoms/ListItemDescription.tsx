import type { FC } from "react";
import type { ProductData } from "../types";
import { formatCurrency } from "../utils";

export const ListItemDescription: FC<ProductData> = ({ title, category, price }) => {
	return (
		<div className="flex grow flex-col justify-between gap-3 p-5">
			<div className="flex flex-col">
				<h3 className="text-2xl font-bold ">{title}</h3>
				<p className="text-lg text-cod-gray-200">{category}</p>
			</div>
			<div className="flex flex-col">
				<p className="mb-5 self-end text-lg font-bold">{formatCurrency(price / 100)}</p>
			</div>
		</div>
	);
};
