import type { ReactNode } from "react";
import type { Route } from "next";


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

