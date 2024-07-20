import { getPagesCount, getProductList } from "@/api/products";
import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { calculateOffset } from "@/ui/utils";

export const generateStaticParams = async () => {
	const totalPages = await getPagesCount();
	const params = Array.from({ length: totalPages }, (_, index) => index + 1);
	return params.map((param) => ({ page: param.toString() }));
};

const ProductsPage = async ({
	params,
}: {
	params: {
		page: string;
	};
}) => {
	const currentPage = parseInt(params.page, 10) || 1;
	const offset = calculateOffset(currentPage, PRODUCTS_PER_PAGE);
	const totalPages = await getPagesCount();
	const products = await getProductList(PRODUCTS_PER_PAGE, offset);

	return (
		<article>
			<ProductList products={products} />
			<Pagination totalPages={totalPages} currentPage={currentPage} path="products" />
		</article>
	);
};

export default ProductsPage;
