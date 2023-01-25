/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*", // *는 뒤에 어떤 주소가 와도 연결해준다.
        destination: "/new-sexy-blog/:path*",
        permanent: false, //!필수입력할것
      },
    ];
  },
  // rewrites 는 유저가 url 변화를 볼 수 없다. (유저가 api 를 볼 수 없다.)
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
