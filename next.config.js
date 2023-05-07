/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // topLevelAwait: true ,
    serverComponentsExternalPackages: ['mongoose'],
  },
}

module.exports = nextConfig
