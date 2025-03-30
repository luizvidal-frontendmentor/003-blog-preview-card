import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	basePath: "/003-blog-preview-card",
	assetPrefix: "/003-blog-preview-card",
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
