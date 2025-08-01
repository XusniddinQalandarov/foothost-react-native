const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Asset handling configuration
config.resolver.assetExts = [
  ...config.resolver.assetExts.filter(ext => ext !== 'svg'),
  // Add specific image formats you're using
  'png', 'jpg', 'jpeg', 'gif', 'webp', 'otf', 'ttf',
];

// Source extensions
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'svg'
];

// Transformer configuration
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  minifierConfig: {
    keep_classnames: true,
    keep_fnames: true,
    mangle: {
      keep_classnames: true,
      keep_fnames: true,
    },
    output: {
      ascii_only: true,
      quote_style: 3,
      wrap_iife: true,
    },
    sourceMap: {
      includeSources: false,
    },
    toplevel: false,
    compress: {
      reduce_funcs: false,
    },
  },
  // Important for large files
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

// Limit workers to avoid memory issues
config.maxWorkers = 4;
config.transformer.maxWorkers = 2;

// Disable RAM bundle which can cause issues with large assets
config.serializer = {
  ...config.serializer,
  createModuleIdFactory: () => {
    const nextId = new Map();
    return path => {
      let id = nextId.get(path);
      if (id === undefined) {
        id = nextId.size;
        nextId.set(path, id);
      }
      return id;
    };
  },
};

module.exports = withNativeWind(config, { input: './global.css' });