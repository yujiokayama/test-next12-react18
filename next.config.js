/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // package.json の version を取得する
    const version = process.env.npm_package_version
    // ピリオドを_に置換したものを Build ID にする
    return version.replace(/\./g, '_')
  },
}

module.exports = nextConfig
