import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
          },
          {
            protocol: 'http',
            hostname: '45.158.14.136'
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
};

export default withNextIntl(nextConfig)
