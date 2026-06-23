import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Tilda CDN is the temporary asset source until originals are migrated.
    remotePatterns: [
      { protocol: "https", hostname: "static.tildacdn.net" },
      { protocol: "https", hostname: "optim.tildacdn.net" },
    ],
  },
};

export default withNextIntl(nextConfig);
