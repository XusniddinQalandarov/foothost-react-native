const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// SVG support with better transformer configuration
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// Asset extensions - remove svg from assetExts and add to sourceExts
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

// Enhanced transformer configuration for better native module support
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Disable Babel RC lookup for consistency
config.transformer.enableBabelRCLookup = false;

// Add transformer options for better SVG handling
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

// Add resolver configuration for better module resolution
config.resolver.alias = {
  ...config.resolver.alias,
};

module.exports = config;
