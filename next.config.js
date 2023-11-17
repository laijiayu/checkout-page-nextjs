/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        //(https://www.course-api.com/images/cart/phone-1.png)
        protocol: "https",
        hostname: "www.course-api.com",
      },
    ],
  },
}

module.exports = nextConfig
