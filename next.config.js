/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["img.evbuc.com", "assets.website-files.com"],
  },
};

module.exports = nextConfig;
