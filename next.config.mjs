/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages deployment to username.github.io/repository-name
  basePath: '/sk-portfolio',
  assetPrefix: '/sk-portfolio/',
  trailingSlash: true,
};

export default nextConfig;
