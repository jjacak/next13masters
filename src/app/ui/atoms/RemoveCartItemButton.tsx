"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { removeCartItem } from "@/app/cart/actions";

export const RemoveCartItemButton = ({ itemId }: { itemId: string }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			className="text-red-700 disabled:text-gray-400"
			aria-label="remove button"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeCartItem(itemId);
					router.refresh();
				});
			}}
		>
			<Trash size={16} name="remove" />
		</button>
	);
};
