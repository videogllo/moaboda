/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //ture일 경우 useEffect()가 두번씩 실행되어서 false로 변경
  swcMinify: true,
}

module.exports = nextConfig
