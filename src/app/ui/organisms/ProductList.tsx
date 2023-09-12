import type { FC } from "react";
import type { ItemCardProps } from "../types";
import { ListItemCard } from "@/ui/molecules/ListItemCard";

const products: ItemCardProps[] = [
	{
		product: { name: "Mostera", category: "Plants", price: 4999, id: 1 },
		image: { src: "/img/monstera.jpg", alt: "Monstera" },
	},
	{
		product: { name: "Ficus", category: "Plants", price: 3799, id: 2 },
		image: { src: "/img/ficus.jpg", alt: "Ficus" },
	},
	{
		product: { name: "Aglaonema nemenennen", category: "Plants", price: 4799, id: 3 },
		image: { src: "/img/aglaonema.jpg", alt: "Aglaonema" },
	},
	{
		product: { name: "Snake Plant", category: "Plants", price: 2799, id: 4 },
		image: { src: "/img/snake-plant.jpg", alt: "Snake Plant" },
	},
];

export const ProductList: FC = () => {
	return (
		<ul data-testid="products-list" className="grid grid-cols-fill-1 gap-10">
			{products.map(({ product, image }) => (
				<ListItemCard key={product.id} product={product} image={image} />
			))}
		</ul>
	);
};
