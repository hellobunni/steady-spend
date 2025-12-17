import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.youneedabudget.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.everydollar.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.simplifimoney.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.copilot.money',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.monarchmoney.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.nerdwallet.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rocketmoney.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.empower.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/tracking-spending',
        destination: '/blog/how-to-track-your-spending',
        permanent: true,
      },
      {
        source: '/blog/budget-mistakes',
        destination: '/blog/common-budget-mistakes',
        permanent: true,
      },
      {
        source: '/blog/50-30-20-rule',
        destination: '/blog/50-30-20-budget-rule',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
