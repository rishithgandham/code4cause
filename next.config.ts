import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**', // This allows all paths under picsum.photos
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
