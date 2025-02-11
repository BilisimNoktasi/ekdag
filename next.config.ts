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
            hostname: '185.9.37.6'
          },
          {
            protocol: 'https',
            hostname: 'ekdag-api.bn.org.tr'
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
};

export default withNextIntl(nextConfig)
