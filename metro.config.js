const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// SVG support
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

// Platform and resolver configuration
config.resolver.platforms = ['ios', 'android', 'web', 'native'];
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Disable symlinks to prevent issues
config.resolver.unstable_enableSymlinks = false;

// Additional node modules paths for better resolution
config.resolver.nodeModulesPaths = [
  require('path').resolve(__dirname, 'node_modules'),
];

// Transformer optimizations
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Disable Babel RC lookup for consistency
config.transformer.enableBabelRCLookup = false;

module.exports = config;
