import bundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

export default bundleAnalyzer({ enabled: !process.env.CI })(nextConfig)
