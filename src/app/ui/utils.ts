export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const checkActiveLink = (path: string, href: string, pagination?: boolean) => {
	const pathNoSearchParams = path.split("?")[0];
	const hrefParts = href.split("/");
	const pathParts = path.split("/");
	return pagination ? href === pathNoSearchParams : hrefParts[1] === pathParts[1];
};

export const calculateOffset = (currentPage: number, perPage: number) => {
	return (currentPage - 1) * perPage;
};
