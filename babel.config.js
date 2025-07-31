module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
    generatorOpts: {
      maxSize: 1000000, // Increase to 1MB (1000000 bytes)
    },
  };
}; 