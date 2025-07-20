/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hwiwoong_log',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 