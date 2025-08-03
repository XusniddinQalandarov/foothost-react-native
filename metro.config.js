const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// SVG support
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

// CRITICAL: TurboModule and native module support
config.resolver.platforms = ['ios', 'android', 'web', 'native'];
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// TurboModuleRegistry fix
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

// CRITICAL: Additional resolver configuration for TurboModule support
config.resolver.nodeModulesPaths = [
  ...config.resolver.nodeModulesPaths,
  require('path').resolve(__dirname, 'node_modules'),
];

// CRITICAL: TurboModule specific configurations
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];
config.resolver.platforms = ['ios', 'android', 'web', 'native'];

// CRITICAL: Disable new architecture warnings
config.resolver.unstable_enableSymlinks = false;

module.exports = config;
