const path = require('path');
module.exports = {
  webpack: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@api': path.resolve(__dirname, 'src/api'),
        "@routes": path.resolve(__dirname, "src/routes"),
        "@layout": path.resolve(__dirname, "src/layout"),
        "@components": path.resolve(__dirname, "src/components"),
        "@redux": path.resolve(__dirname, "src/redux"),
    },
  },
};