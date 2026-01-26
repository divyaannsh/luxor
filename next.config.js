/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },

  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
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
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
