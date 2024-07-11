"use client";

import Link from "next/link";
import type { Route } from "next";
import { type FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { checkActiveLink } from "../utils";

type ActiveLinkProps<T extends string> = {
	children: React.ReactNode;
	href: Route<T> | URL;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink: FC<ActiveLinkProps<string>> = ({
	children,
	href,
	className,
	activeClassName,
}) => {
	const path = usePathname();

	const isActive = checkActiveLink(path, href.toString());
	return (
		<Link
			href={href}
			className={clsx(isActive ? activeClassName : className)}
			aria-current={isActive ? true : undefined}
		>
			{children}
		</Link>
	);
};
