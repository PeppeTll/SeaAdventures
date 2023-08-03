/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
    @import "./src/scss";
    `,
  },
}

module.exports = nextConfig
