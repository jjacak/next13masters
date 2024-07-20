import type { FC } from "react";
import type { Route } from "next";
import type { MenuItem } from "../types";
import { MAIN_MENU_ITEMS } from "../consts";
import { ActiveLink } from "../atoms/ActiveLink";
import CartButton from "../atoms/CartButton";
import { getAllCategories } from "@/api/categories";

export const MainMenuItemsList: FC = async () => {
	const createMainMenuItems = async (): Promise<MenuItem[]> => {
		const categoriesResponse = await getAllCategories();
		const categories = categoriesResponse.map((category) => ({
			name: category.name,
			path: `/categories/${category.slug}` as Route,
		}));
		return [...MAIN_MENU_ITEMS, ...categories];
	};

	const menuItems = await createMainMenuItems();

	return (
		<ul className="flex gap-3 justify-self-end whitespace-nowrap">
			{menuItems.map(({ name, path, icon }) => (
				<li key={path.toString()} className="flex items-center justify-center">
					<ActiveLink href={path} className="text-lg" activeClassName="text-lg font-bold">
						{icon ? icon : null}
						{name}
					</ActiveLink>
				</li>
			))}
			<li className="flex items-center justify-center">
				<CartButton />
			</li>
		</ul>
	);
};
