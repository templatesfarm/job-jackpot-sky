/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["portfolioui"],
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
      { hostname: "assets.aceternity.com" },
      { hostname: "images.pexels.com" },
      { hostname: "placehold.co" },
    ],
  },
  
};

export default nextConfig;
