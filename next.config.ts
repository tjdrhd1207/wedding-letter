import type { NextConfig } from "next";
import collectStyles from './server-styles';

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, { isServer }) {
    if (isServer) {
      collectStyles();
    }
    return config;
  },
};

export default nextConfig;
