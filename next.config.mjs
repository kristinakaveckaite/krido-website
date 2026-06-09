/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // NOTE: During the transition we load assets straight from Framer's CDN so the
      // site looks identical immediately. Before going fully live, download these into
      // /public and switch the URLs to local paths so you don't depend on Framer.
      { protocol: "https", hostname: "framerusercontent.com" },
    ],
  },
};

export default nextConfig;
