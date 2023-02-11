/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["img.evbuc.com", "assets.website-files.com", "www.rd.com"],
  },
};

module.exports = nextConfig;
