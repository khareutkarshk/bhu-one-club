/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/youth-parliament/new',
          destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/youth-parliament/new/`,
        },
        {
          source: '/quiz/new',
          destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/quiz/new/`,
        },
        {
          source: '/mock-test/new',
          destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/mock-test/new/`,
        },
      ];
    },
  };
  
  export default nextConfig;
  
