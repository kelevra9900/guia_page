const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {};

module.exports = {
  webpack: (config, options) => {
    config.optimization.minimize = false;
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
  ],
  nextConfig
);
