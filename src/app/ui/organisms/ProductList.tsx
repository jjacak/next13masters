import type { FC } from "react";
import { getProductList } from "../utils";
import { ListItemCard } from "@/ui/molecules/ListItemCard";

export const ProductList: FC<{take?:number; offset? :number}> = async ({take, offset=0}) => {

	const products = await getProductList(take, offset);

	return (
		<ul data-testid="products-list" className="grid grid-cols-fill-1 gap-10">
			{products.map((product) => (
				<ListItemCard key={product.id} {...product} />
			))}
		</ul>
	);
};
