import type { NextConfig } from "next";
// import { redirect } from "next/dist/server/api-utils";

const nextConfig: NextConfig = {
  async redirects(){
    return [
      { 
        source:"/",
        destination:"/meetings",
        permanent:false,
      },
    ];
  }
};

export default nextConfig;
