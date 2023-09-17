import type { ReactNode } from "react";
import type { Route } from "next";

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

export type MenuItem = {
	name: string;
	path: Route<string> | URL;
	id: number;
	img?: string;
};
