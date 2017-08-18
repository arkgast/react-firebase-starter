const WebpackConfig = require('webpack-config')

const TARGET = process.env.npm_lifecycle_event

let configFile

switch (TARGET) {
  case 'start':
    configFile = 'config/webpack.development.js'
    break
  case 'build':
    configFile = 'config/webpack.production.js'
    break
}

module.exports = new WebpackConfig.Config().extend(configFile)
