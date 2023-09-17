import type { FC } from "react";
import { MAIN_MENU_ITEMS } from "../consts";
import { ActiveLink } from "../atoms/ActiveLink";

export const MainMenuItemsList: FC = () => {
	return (
		<ul className="flex gap-3 justify-self-end">
			{MAIN_MENU_ITEMS.map(({ name, path }) => (
				<li key={path.toString()}>
					<ActiveLink href={path} className="text-lg" activeClassName="text-lg font-bold">
						{name}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
