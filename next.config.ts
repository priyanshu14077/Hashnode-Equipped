import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.hashnode.com', 
      'hashnode.com',
      
    ],
  },
  
  experimental: {
    serverActions: {
      bodySizeLimit: '1mb',
      allowedOrigins: ['*'],
    },
  },
}


export default nextConfig;
