/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['thispersondoesnotexist.com', 'cloudflare-ipfs.com'],
  },
};

module.exports = nextConfig;
