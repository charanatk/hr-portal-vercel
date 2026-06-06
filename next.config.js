/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable Jest worker for builds
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
