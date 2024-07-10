import type { ReadonlyURLSearchParams } from "next/navigation";

export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const checkActiveLink = (
	path: string,
	href: string,
	searchParams?: ReadonlyURLSearchParams,
) => {
	const checkPath = () => {
		const pathParts = path.split("/");
		const hrefParts = href.split("/");
		return pathParts[1] === hrefParts[1].split("?")[0];
	};

	const checkSearchParams = () => {
		const hrefPage = new URLSearchParams(href.split("?")[1]).get("page");

		if ((!searchParams || !searchParams.has("page")) && hrefPage && hrefPage !== "1") {
			return false;
		}
		if (searchParams && searchParams.has("page")) {
			const page = searchParams.get("page");

			return hrefPage ? page === hrefPage : true;
		}
		return true;
	};

	return checkPath() && checkSearchParams();
};

export const getCurrentPage = (searchParams?: { [key: string]: string | string[] | undefined }) => {
	if (searchParams && searchParams.page) {
		return parseInt(searchParams.page as string, 10) || 1;
	}
	return 1;
};

export const calculateOffset = (currentPage: number, perPage: number) => {
	return (currentPage - 1) * perPage;
};
