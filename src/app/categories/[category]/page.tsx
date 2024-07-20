import { redirect } from "next/navigation";

export default function ProductsIndex({params: { category}}: {params: { category: string }}) {
	redirect(`/categories/${category}/1`);
}
