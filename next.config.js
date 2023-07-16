/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["random.imagecdn.app"],
	},
	env: {
		custom: "Fact It Up",
	},
};

module.exports = nextConfig;
