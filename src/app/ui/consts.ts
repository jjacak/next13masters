import type { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
	{ name: "Home", id: 1, path: "/" },
	{ name: "Shop", id: 2, path: "/products", img: "/img/monstera.jpg" },
];

export const MAIN_MENU_ITEMS: MenuItem[] = [
	{ name: "Home", id: 1, path: "/" },
	{ name: "All", id: 2, path: "/products" },
];
