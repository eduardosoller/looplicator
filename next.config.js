/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'looplipacker.s3.amazonaws.com',
      },
    ],
  },
  // webpack(config) {
  //   config.resolve.fallback = {

  //     // if you miss it, all the other options in fallback, specified
  //     // by next.js will be dropped.
  //     ...config.resolve.fallback,

  //     fs: false, // the solution
  //   };

  //   return config;
  // },
}

module.exports = nextConfig
