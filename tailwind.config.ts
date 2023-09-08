import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"moon-mist": {
					DEFAULT: "#E1E0D2",
					50: "#FFFFFF",
					100: "#FFFFFF",
					200: "#FFFFFF",
					300: "#FFFFFF",
					400: "#F1F1EA",
					500: "#E1E0D2",
					600: "#CBC9B0",
					700: "#B4B28F",
					800: "#9E9A6D",
					900: "#7E7C54",
					950: "#6E6B49",
				},
				corduroy: {
					DEFAULT: "#607271",
					50: "#C0CAC9",
					100: "#B5C0C0",
					200: "#9FAEAD",
					300: "#889B9A",
					400: "#738887",
					500: "#607271",
					600: "#465453",
					700: "#2D3535",
					800: "#131716",
					900: "#000000",
					950: "#000000",
				},
				"cod-gray": {
					DEFAULT: "#191816",
					50: "#7B766C",
					100: "#706B62",
					200: "#5A574F",
					300: "#44423C",
					400: "#2F2D29",
					500: "#191816",
					600: "#000000",
					700: "#000000",
					800: "#000000",
					900: "#000000",
					950: "#000000",
				},
			},
			fontFamily: {
				display: ["var(--font-playfair-display)"],
				sans: ["var(--font-manrope)"],
			},
		},
	},
	plugins: [],
};
//eslint-disable-next-line
export default config;
