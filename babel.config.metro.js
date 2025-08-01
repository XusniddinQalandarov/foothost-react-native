module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['nativewind/babel'],
  env: {
    production: {
      compact: true,
      minified: true,
    },
  },
};
