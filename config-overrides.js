const path = require('path')

const resolve = pathToDir => path.resolve(__dirname, 'src/' + pathToDir)

const aliases = {
  '@': resolve(),
  Store: resolve('store'),
  Core: resolve('store/core'),
  Components: resolve('components'),
  Api: resolve('api'),
  Common: resolve('common')
}

module.exports = function override (config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases
  }

  return config
}
