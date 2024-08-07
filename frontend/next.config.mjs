/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["commons/*"],
  env: {
    AUTH_MSG: process.env.AUTH_MSG,
    CERBERUS_PAY_CONTRACT: process.env.CERBERUS_PAY_CONTRACT,
    BACKEND_URL: process.env.BACKEND_URL,
    WSS_URL: process.env.WSS_URL,
  },
};

export default nextConfig;
