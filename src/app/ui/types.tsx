import type { ReactNode } from "react";

export type ItemDescriptionProps = {
	name: string;
	category: string;
	price: number;
	id: number;
};

export type ItemImageProps = {
	src: string;
	alt: string;
};

export type ItemCardProps = {
	product: ItemDescriptionProps;
	image: ItemImageProps;
};

export type ButtonProps = {
	children: ReactNode | string;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset";
};
