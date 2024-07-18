import type { FC } from "react";
import { ListItemCard } from "@/ui/molecules/ListItemCard";
import type { ProductData } from "@/ui/types";

export const ProductList: FC<{ products: ProductData[] }> = async ({ products}) => {


	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
		>
			{products.map((product) => (
				<ListItemCard key={product.id} {...product} />
			))}
		</ul>
	);
};
