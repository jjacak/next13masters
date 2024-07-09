export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const checkActiveLink = (path: string, href: string) => {
	const pathParts = path.split("/");
	const hrefParts = href.split("/");
	return pathParts[1] === hrefParts[1];
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
