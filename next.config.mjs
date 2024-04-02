/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/youth-parliament/new',
          destination: `http://13.50.142.239:3001/youth-parliament/new`,
        },
        {
          source: '/quiz/new',
          destination: `http://13.50.142.239:3001/quiz/new/`,
        },
        {
          source: '/mock-test/new',
          destination: `http://13.50.142.239:3001/mock-test/new/`,
        },
      ];
    },
  };
  
  export default nextConfig;
  
