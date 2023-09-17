import type { FC } from "react";
import { MENU_ITEMS } from "../consts";
import { ActiveLink } from "../atoms/ActiveLink";

export const MenuITemsList: FC = () => {
	return (
		<ul>
			{MENU_ITEMS.map(({ name, path, id }) => (
				<li key={id} className="">
					<ActiveLink
						href={path}
						className="text-lg font-semibold"
						activeClassName="text-lg font-bold"
					>
						{name}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
