/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  distDir: 'dist',  
  reactStrictMode: true, 
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, 
      };
    }
    return config;
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
  i18n: {
    locales: ['en', 'fr', 'de'],  
    defaultLocale: 'en',  
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
