/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['product-image.kurly.com', 'localhost', 'shopping-phinf.pstatic.net', 'simg.ssgcdn.com', 'images.unsplash.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'product-image.kurly.com',
  //       port: '',
  //       // pathname: '/account123/**',
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
