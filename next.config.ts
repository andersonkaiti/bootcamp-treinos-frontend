import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gw8hy3fdcv.ufs.sh',
      },
    ],
  },
}

export default nextConfig
