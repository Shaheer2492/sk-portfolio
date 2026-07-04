// GitHub Pages serves the site under /sk-portfolio; Vercel serves it at
// the domain root. The GH Pages workflow sets GITHUB_PAGES=true.
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: '/sk-portfolio',
        assetPrefix: '/sk-portfolio/',
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
