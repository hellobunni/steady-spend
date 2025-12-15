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
};

export default nextConfig;
