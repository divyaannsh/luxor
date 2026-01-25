/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },

  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "/assets/:path*",
      },
      {
        source: "/start",
        destination: "/html/index.html",
      },
    ];
  },
  images: {
    disableStaticImages: false,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
