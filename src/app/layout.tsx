import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { TopNavigation } from "./ui/organisms/TopNavigation";

const manrope = Manrope({ subsets: ["latin-ext"], variable: "--font-manrope" });
const playfair_display = Playfair_Display({
	subsets: ["latin-ext"],
	variable: "--font-playfair-display",
});

export const metadata: Metadata = {
	title: "Next13Masters",
	description: "Next13Masters project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${manrope.variable} ${playfair_display.variable} relative min-h-screen bg-moon-mist-400 font-sans text-cod-gray pt-20`}
			>
				<TopNavigation />
				{children}
			</body>
		</html>
	);
}
