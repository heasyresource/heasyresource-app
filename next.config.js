/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
