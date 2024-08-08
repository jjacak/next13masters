/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();

const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: { typedRoutes: true, mdxRs: true },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = withMDX(nextConfig);
