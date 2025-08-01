process.env.BABEL_DISABLE_CACHE = 1;

module.exports = {
  presets: ["babel-preset-expo"],
  plugins: ["nativewind/babel"],
  compact: true,
  minified: true,
  comments: false,
  overrides: [
    {
      test: /\.jsx?$|\.tsx?$/,
      compact: true,
    },
    {
      test: /node_modules/,
      compact: true,
      sourceType: "unambiguous",
    },
  ],
  parserOpts: {
    sourceType: "unambiguous",
  },
  generatorOpts: {
    shouldPrintComment: () => false,
    retainLines: false,
    compact: true,
    minified: true,
    concise: true,
    maxSize: 50000000, // 50MB to be absolutely sure
  },
};
