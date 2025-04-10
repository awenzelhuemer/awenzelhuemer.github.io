import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

const nextConfig: NextConfig = {
  output: 'export', // static export
  assetPrefix: isGithubPages ? '/awenzelhuemer.github.io/' : '',
  basePath: isGithubPages ? '/awenzelhuemer.github.io' : '',
  trailingSlash: true,
};

export default nextConfig;
