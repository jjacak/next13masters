import type { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
	{ name: "Home", path: "/" },
	{ name: "Shop", path: "/products", img: { src: "/img/pots.jpg", alt: "Shop" } },
	{ name: "Cart", path: "/cart", img: { src: "/img/ficus.jpg", alt: "Cart" } },
	{ name: "Privacy policy", id: 3, path: "/privacy-policy" },
	{ name: "Contact", path: "/contact" },
];

export const MAIN_MENU_ITEMS: MenuItem[] = [
	{ name: "Home", path: "/" },
	{ name: "All", path: "/products" },
];
