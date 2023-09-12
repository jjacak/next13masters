import type { FC } from "react";
import type { ItemDescriptionProps } from "../types";
import { formatCurrency } from "../utils";

export const ListItemDescription: FC<ItemDescriptionProps> = ({ name, category, price }) => {
	return (
		<div className="flex grow flex-col justify-between gap-3 p-5">
			<div className="flex flex-col">
				<h3 className="text-3xl font-bold ">{name}</h3>
				<p className="text-xl">{category}</p>
			</div>
			<div className="flex flex-col">
				<p className="mb-5 self-end text-lg font-bold">{formatCurrency(price / 100)}</p>
				<button className="w-full rounded-lg bg-corduroy p-3 font-semibold text-moon-mist-50">
					Add to cart
				</button>
			</div>
		</div>
	);
};
