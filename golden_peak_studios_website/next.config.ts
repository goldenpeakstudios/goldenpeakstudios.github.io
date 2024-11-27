/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: '../docs',
  assetPrefix: './',
};

module.exports = nextConfig;
