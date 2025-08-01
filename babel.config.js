process.env.BABEL_DISABLE_CACHE = 1;

module.exports = function (api) {
  api.cache(false);  // Disable caching for troubleshooting
  
  return require('./babel.max.js');
};