import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/branntilsyn', destination: '/branninspeksjon', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: '.+\\.vercel\\.app' }],
        destination: 'https://www.kristiansandbrannkonsult.no/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
