export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const checkActiveLink = (path: string, href: string) => {
	const pathNoSearchParams = path.split("?")[0];
	return href === pathNoSearchParams;
};

export const calculateOffset = (currentPage: number, perPage: number) => {
	return (currentPage - 1) * perPage;
};
