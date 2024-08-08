"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			className="mx-auto w-full max-w-2xl rounded bg-emerald-700 px-8 py-3 text-white shadow hover:shadow-lg disabled:cursor-wait disabled:bg-emerald-300"
			type="submit"
			disabled={formStatus.pending}
		>
			Add to cart
		</button>
	);
};
