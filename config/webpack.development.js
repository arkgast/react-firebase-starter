const { resolve } = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const WebpackConfig = require('webpack-config')


module.exports = new WebpackConfig.Config()
  .extend('config/webpack.base.js')
  .merge({
    devtool: 'inline-source-map',
    entry: {
      vendor: [
        'lodash'
      ],
      main: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index.js'
      ]
    },
    devServer: {
      contentBase: resolve(__dirname, 'public'),
      clientLogLevel: 'warning',
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      port: 3000,
      quiet: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new DashboardPlugin()
    ]
  })
