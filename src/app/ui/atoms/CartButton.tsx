import { ShoppingBag } from "lucide-react";
import { ActiveLink } from "./ActiveLink";
import { getCartFromCookie } from "@/api/cart";

export default async function CartButton() {
	const cart = await getCartFromCookie();
	const quantity = cart?.orderItems.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<ActiveLink
			href="/cart"
			className="flex items-center text-sm"
			activeClassName="flex items-center text-sm font-bold"
			aria-label="Cart"
		>
			<ShoppingBag size={20} />
			<div className="mt-3">{quantity}</div>
		</ActiveLink>
	);
}
