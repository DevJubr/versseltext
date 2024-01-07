/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpaperbat.com",
        pathname: "/img/**",
      },
    ],
  },
};
module.exports = nextConfig;
