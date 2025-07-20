/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hwiwoong_log',
  trailingSlash: true,
  assetPrefix: '/hwiwoong_log/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 