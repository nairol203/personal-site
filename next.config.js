/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	images: {
		formats: ['image/webp'],
		remotePatterns: [
			{
				hostname: 'nairol.me',
				pathname: '/thumbnails/**',
				port: '',
				protocol: 'https',
			},
		],
	},
};

module.exports = nextConfig;
