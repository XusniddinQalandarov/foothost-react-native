const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Asset handling configuration
config.resolver.assetExts = [
  ...config.resolver.assetExts.filter(ext => ext !== 'svg'),
  'png', 'jpg', 'jpeg', 'gif', 'webp', 'otf', 'ttf',
];

// Source extensions
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'svg'
];

// SVG transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

module.exports = withNativeWind(config, { input: './global.css' });
