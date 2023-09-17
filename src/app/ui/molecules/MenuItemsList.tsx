import type { FC } from "react";
import { MENU_ITEMS } from "../consts";
import { ActiveLink } from "../atoms/ActiveLink";

export const MenuITemsList: FC = () => {
	return (
		<ul className="max-w-2xl px-3 py-10">
			{MENU_ITEMS.map(({ name, path }) => (
				<li key={path.toString()} className="group inline-block px-2 py-1">
					<ActiveLink
						href={path}
						className="text-3xl font-semibold sm:text-5xl "
						activeClassName="text-3xl sm:text-5xl font-bold italic"
					>
						{name}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
