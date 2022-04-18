/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: async () => {
    // package.json の version を取得する
    const version = process.env.npm_package_version;
    console.log('Use package version as Build ID: ', version);
    // ピリオドをハイフンに置換したものを Build ID にする
    return version.replace(/\./g, '-');
  },
};

export default nextConfig;
