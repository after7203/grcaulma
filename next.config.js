/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.danawa.com"],
  },
  async redirects() {
    return [
      // {
      //   source: "/recommend",
      //   destination: "/recommend/office",
      //   permanent: false,
      // },
      // {
      //   source: "/recommend/gaming",
      //   destination: "/recommend/gaming/lol",
      //   permanent: false,
      // },
      // {
      //   source: "/recommend/task",
      //   destination: "/recommend/task/broadcast",
      //   permanent: false,
      // },
    ];
  },
};

module.exports = nextConfig;
