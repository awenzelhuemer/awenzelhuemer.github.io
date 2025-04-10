import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

const nextConfig: NextConfig = {
  output: 'export', // static export
  assetPrefix: isGithubPages ? '/' : '',
  basePath: isGithubPages ? '/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
