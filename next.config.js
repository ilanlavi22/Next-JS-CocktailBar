/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  nextConfig
};
