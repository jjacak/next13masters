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
