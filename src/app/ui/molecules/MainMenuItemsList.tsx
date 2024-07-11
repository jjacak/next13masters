import type { FC } from "react";
import { MAIN_MENU_ITEMS } from "../consts";
import { ActiveLink } from "../atoms/ActiveLink";
import CartButton from "../atoms/CartButton";

export const MainMenuItemsList: FC = () => {
	return (
		<ul className="flex gap-3 justify-self-end">
			{MAIN_MENU_ITEMS.map(({ name, path, icon }) => (
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
