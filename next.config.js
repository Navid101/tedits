/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['i1.ytimg.com','media.discordapp.net'],
  }
}

module.exports = nextConfig
