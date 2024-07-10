"use client";

import { usePathname } from "next/navigation";
import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export default function Pagination({ totalPages }: { totalPages: number }) {
	const pathname = usePathname();

	const generatePagination = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			const href = `${pathname}?page=${i}` as Route;
			pages.push(
				<li key={i} className="px-3">
					<ActiveLink href={href} activeClassName="font-bold">
						{i}
					</ActiveLink>
				</li>,
			);
		}
		return pages;
	};
	return (
		<ul aria-label="pagination" className="flex justify-center py-5 text-lg">
			{generatePagination()}
		</ul>
	);
}
