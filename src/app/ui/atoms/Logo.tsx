import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export const Logo: FC = () => {
	return (
		<Link href="/" className="flex items-center">
			{" "}
			<Image src="/img/leaves.png" alt="logo" width={60} height={70} />
			<span className="w-min text-center font-display">FLORA FAIR</span>
		</Link>
	);
};
