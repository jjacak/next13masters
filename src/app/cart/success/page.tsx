import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function PaymentSuccessPage({
	searchParams,
}: {
	searchParams: { session_id?: string };
}) {
	if (!searchParams.session_id) {
		redirect("/");
	}
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY not found");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-06-20",
		typescript: true,
	});
	const session = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return (
		<div>
			<h1>{session.payment_status}</h1>
		</div>
	);
}
