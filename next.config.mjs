/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to github.io/repository-name, add basePath
  // basePath: '/sk-portfolio',
  // assetPrefix: '/sk-portfolio/',
};

export default nextConfig;
