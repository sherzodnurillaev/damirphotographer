import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://wzmcojfznibyxggibuux.supabase.co/**"),
      {
        protocol: "https",
        hostname: "cdn.damirregistan.com",
      },
      {
        protocol: "https",
        hostname: "wzmcojfznibyxggibuux.supabase.co",
      },
    ],
  },
};

export default withNextIntl(nextConfig);