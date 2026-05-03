/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/features',
        destination: '/#features',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
