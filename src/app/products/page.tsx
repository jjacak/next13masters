import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import { ProductList } from "@/ui/organisms/ProductList";
import { calculateOffset, getCurrentPage } from "@/ui/utils";

const ProductsPage = async ({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) => {

	const offset = calculateOffset(getCurrentPage(searchParams), PRODUCTS_PER_PAGE);
	return <ProductList take={20} offset={offset} />;
};

export default ProductsPage;
