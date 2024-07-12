"use client";

import { type FC, useState } from "react";
import clsx from "clsx";
import { MainMenuItemsList } from "../molecules/MainMenuItemsList";
import { MenuITemsList } from "../molecules/MenuItemsList";
import { Logo } from "../atoms/Logo";
import { MenuButton } from "../atoms/MenuButton";

export const TopNavigation: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen((prev) => !prev);
	return (
		<nav className="fixed left-0 right-0 top-0 z-50">
			<div>
				<div className="grid grid-cols-3 items-center border-b border-corduroy-400 bg-moon-mist-300  px-3 text-cod-gray-300 ">
					<Logo />
					<MenuButton isOpen={isOpen} handleClick={toggleMenu} />
					<MainMenuItemsList />
				</div>
				<div
					className={clsx(
						"overflow-hidden bg-moon-mist-300 transition-all duration-700",
						isOpen ? "max-h-96" : "max-h-0",
					)}
				>
					<MenuITemsList />
				</div>
			</div>
			<div
				className={clsx(
					"blur-s opacity-2  bg-black opacity-20 blur-sm transition-all duration-500",
					isOpen ? "h-screen" : "h-0",
				)}
			></div>
		</nav>
	);
};
