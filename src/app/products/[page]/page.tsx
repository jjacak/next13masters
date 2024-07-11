import { getProductsCount } from "@/api/products";
import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { calculateOffset} from "@/ui/utils";

const ProductsPage = async ({
	params,
}: {
	params: {
		page: string;
	};
}) => {
	const currentPage = parseInt(params.page, 10) || 1;
	const offset = calculateOffset(currentPage, PRODUCTS_PER_PAGE);
	const productsCount = await getProductsCount();
	const totalPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);
	return (
		<article>
			<ProductList take={PRODUCTS_PER_PAGE} offset={offset} />
			<Pagination totalPages={totalPages} currentPage={currentPage} path="products"/>
		</article>
	);
};

export default ProductsPage;
