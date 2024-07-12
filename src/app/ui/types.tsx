import type { ReactNode } from "react";
import type { Route } from "next";

export type ProductData = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export type Rating = {
	rate: number;
	count: number;
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
	icon?: ReactNode;
};

export type ItemCardProps = {
	products: ProductData[];
};
