export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const checkActiveLink = (path: string, href: string, pagination?: boolean) => {
	const pathNoSearchParams = path.split("?")[0] || "";
	const pathParts = pathNoSearchParams.split("/");
	const pathNoPagination = !isNaN(parseInt(pathParts.at(-1) || ""))
		? pathParts.slice(0, -1).join("/")
		: pathParts.join("/");

	return pagination ? href === pathNoSearchParams : href === pathNoPagination;
};

export const calculateOffset = (currentPage: number, perPage: number) => {
	return (currentPage - 1) * perPage;
};
