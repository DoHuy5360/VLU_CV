/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["jsx", "js", "ts", "tsx"],
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "storage.googleapis.com",
				port: "",
			},
		],
	},
	output: "standalone",
};

export default nextConfig;
