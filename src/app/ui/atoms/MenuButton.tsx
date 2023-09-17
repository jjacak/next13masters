import type { FC } from "react";
import clsx from "clsx";
type MenuButtonProps = {
	isOpen: boolean;
	handleClick: () => void;
};
export const MenuButton: FC<MenuButtonProps> = ({ isOpen, handleClick }) => {
	return (
		<button onClick={handleClick} className="flex flex-col items-center justify-center justify-self-center">
			<span
				className={clsx(
					"block h-0.5 w-8 rounded-sm bg-cod-gray-300 transition-all duration-300 ease-out",
					isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5",
				)}
			></span>
			<span
				className={clsx(
					"my-0.5 block h-0.5 w-8 rounded-sm bg-cod-gray-300 transition-all duration-300 ease-out",
					isOpen ? "opacity-0" : "opacity-100",
				)}
			></span>
			<span
				className={clsx(
					"block h-0.5 w-8 rounded-sm bg-cod-gray-300 transition-all duration-300 ease-out",
					isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5",
				)}
			></span>
		</button>
	);
};
