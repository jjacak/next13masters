"use client";

import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export default function Pagination({
	totalPages,
	currentPage,
	path,
}: {
	totalPages: number;
	currentPage: number;
	path: string;
}) {
	const generatePagination = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			if (
				i === 1 ||
				i === totalPages ||
				i === currentPage ||
				i === currentPage - 1 ||
				i === currentPage + 1
			) {
				const href = `/${path}/${i}` as Route;
				pages.push(
					<li key={i} className="px-3">
						<ActiveLink href={href} activeClassName="font-bold">
							{i}
						</ActiveLink>
					</li>,
				);
			}
		}
		return pages;
	};
	return (
		<ul aria-label="pagination" className="flex justify-center py-5 text-lg">
			{generatePagination()}
		</ul>
	);
}
