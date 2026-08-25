/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "34.36.169.22",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      }
    ],
  },
};

export default nextConfig;