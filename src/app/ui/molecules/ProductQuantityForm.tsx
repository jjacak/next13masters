"use client";

import { changeQuantityAction } from "@/cart/actions";
import { useOptimistic } from "react";

export const ProductQuantityForm = ({ itemId, quantity }: { itemId: string; quantity: number }) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form>
			<button
				className="mx-2 h-6 w-6 border border-corduroy-200"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeQuantityAction(itemId, optimisticQuantity - 1);
				}}
			>
				-
			</button>
			{optimisticQuantity}
			<button
				className="mx-2 h-6 w-6 border border-corduroy-200"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeQuantityAction(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
};
