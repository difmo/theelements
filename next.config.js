/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist', 
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
