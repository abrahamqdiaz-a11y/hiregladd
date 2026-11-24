/** @type {import('next').NextConfig} */

// Placeholders (proof, bio, booking link) are shown in local builds and Netlify
// deploy previews, and hidden on the live production site until you fill them in.
const showPlaceholders = process.env.CONTEXT !== "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_SHOW_PLACEHOLDERS: showPlaceholders ? "true" : "false",
  },
};

export default nextConfig;
