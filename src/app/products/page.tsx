import { getProductsCount } from "@/api/products";
import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { calculateOffset, getCurrentPage } from "@/ui/utils";

const ProductsPage = async ({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) => {
	const offset = calculateOffset(getCurrentPage(searchParams), PRODUCTS_PER_PAGE);
	const productsCount = await getProductsCount();
	const totalPages = productsCount / PRODUCTS_PER_PAGE;
	return (
		<article>
			<ProductList take={PRODUCTS_PER_PAGE} offset={offset} />
			<Pagination totalPages={totalPages} />
		</article>
	);
};

export default ProductsPage;
