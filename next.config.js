/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/hwiwoong_log' : '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hwiwoong_log/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 