const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ['typescript'],
        filename: 'static/[name].worker.js',
      })
    );

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

const withTM = require('next-transpile-modules')(['monaco-editor']);

module.exports = withTM(nextConfig);
