/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }

    return config
  },
}

module.exports = nextConfig
