const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// SVG support
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

// Enhanced TurboModule and native module support
config.resolver.platforms = ['ios', 'android', 'web', 'native'];
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Fix for TurboModuleRegistry issues
config.resolver.alias = {
  ...config.resolver.alias,
};

// Enhanced transformer configuration
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Better source map support
config.transformer.enableBabelRCLookup = false;

// Additional resolver configuration for better native module support
config.resolver.nodeModulesPaths = [
  ...config.resolver.nodeModulesPaths,
  require('path').resolve(__dirname, 'node_modules'),
];

module.exports = config;
