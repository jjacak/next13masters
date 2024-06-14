import { ProductList } from "@/ui/organisms/ProductList";

const ProductsPage = async () => {
	return <ProductList take={20} />;
};

export default ProductsPage;
