import type { FC } from "react";
import { AddToCartButton } from "../atoms/AddToCartButton";
import { addToCartAction } from "@/api/cart";

export const AddToCartForm: FC<{ id: string }> = ({ id: productId }) => {
	const handleAddToServerAction = async () => {
		"use server";
		return addToCartAction(productId);
	};
	return (
		<form className="p-5 md:col-start-2" action={handleAddToServerAction}>
			<AddToCartButton />
		</form>
	);
};
