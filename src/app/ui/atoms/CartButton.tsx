import { ShoppingBag } from "lucide-react";
import { ActiveLink } from "./ActiveLink";

export default function CartButton() {
	const cartCount = 0;
	return (
		<ActiveLink
			href="/cart"
			className="flex items-center text-sm"
			activeClassName="flex items-center text-sm font-bold"
			aria-label="Cart"
		>
			<ShoppingBag size={20} />
			<div className="mt-3">{cartCount}</div>
		</ActiveLink>
	);
}
