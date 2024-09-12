import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { formatCurrency } from "@/ui/utils";
import { ProductQuantityForm } from "@/ui/molecules/ProductQuantityForm";
import { RemoveCartItemButton } from "@/ui/atoms/RemoveCartItemButton";
import { unstable_noStore } from "next/cache";
import { handlePaymentAction } from "./actions";
import { getCartFromCookie } from "@/api/cart";

export default async function CartPage() {
	unstable_noStore();
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const cart = await getCartFromCookie();

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table className="table-fixed">
				<thead className="bg-moon-mist-500">
					<tr>
						<th className="px-5 py-2">Product</th>
						<th className="px-5 py-2">Quantity</th>
						<th className="px-5 py-2">Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.id}>
								<td className="px-5 py-2">{item.product.name}</td>
								<td className="px-5 py-2 text-center">
									<ProductQuantityForm quantity={item.quantity} itemId={item.id} />
								</td>
								<td className="px-5 py-2">{formatCurrency(item.product.price / 100)}</td>
								<td className="px-5 py-2">
									<RemoveCartItemButton itemId={item.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<td className="px-5 py-2 font-bold">Total</td>
						<td className="px-5 py-2"></td>
						<td className="px-5 py-2 font-bold">{formatCurrency(cart.total / 100)}</td>
					</tr>
				</tfoot>
			</table>
			<form action={handlePaymentAction}>
				<button type="submit" className="mt-10 rounded bg-corduroy-500 px-5 py-2 text-white">
					Proceed to checkout
				</button>
			</form>
		</div>
	);
}
