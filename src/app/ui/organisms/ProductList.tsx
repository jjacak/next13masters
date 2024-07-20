import type { FC } from "react";
import { ListItemCard } from "@/ui/molecules/ListItemCard";
import type { ProductListItemFragment } from "@/gql/graphql";

export const ProductList: FC<{ products: ProductListItemFragment[] }> = async ({ products }) => {
	if (!products.length) {
		return <p data-testid="no-products">No products found</p>;
	}

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
