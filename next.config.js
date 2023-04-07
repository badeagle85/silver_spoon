/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['product-image.kurly.com', 'localhost', 'shopping-phinf.pstatic.net', 'simg.ssgcdn.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
