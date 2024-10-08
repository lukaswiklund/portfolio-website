/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	compiler: { emotion: true },
	images: { unoptimized: true },
}

module.exports = nextConfig
