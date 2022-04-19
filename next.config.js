/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  generateBuildId: async () => {
    // package.json の version を取得する
    const version = process.env.npm_package_version;
    console.log('Use package version as Build ID: ', version);
    // ピリオドを_に置換したものを Build ID にする
    return version.replace(/\./g, '_');
  },
};

export default nextConfig;
