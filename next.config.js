/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
      },
    ],
    domains: ["i.ytimg.com", "yt3.ggpht.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
