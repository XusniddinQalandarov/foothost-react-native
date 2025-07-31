const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Optimize assets for APK
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Configure SVG transformer properly
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// Remove SVG from asset extensions since we're using the transformer
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');

// Add SVG to source extensions
config.resolver.sourceExts.push('svg');

module.exports = config; 