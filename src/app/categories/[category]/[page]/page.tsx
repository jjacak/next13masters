import { getProductsByCategorySlug, getPagesCount } from "@/api/products";
import { PRODUCTS_PER_PAGE } from "@/ui/consts";
import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { calculateOffset } from "@/ui/utils";

export default async function CategoryPage({
	params: { category, page },
}: {
	params: { category: string; page: string };
}) {
	const currentPage = parseInt(page, 10) || 1;
	const offset = calculateOffset(currentPage, PRODUCTS_PER_PAGE);
	const totalPages = await getPagesCount(category);
	const products = await getProductsByCategorySlug(category, PRODUCTS_PER_PAGE, offset);

	return (
		<article>
			<ProductList products={products} />
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				path={`categories/${category}`}
			/>
		</article>
	);
}
