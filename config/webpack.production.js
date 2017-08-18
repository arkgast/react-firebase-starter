const webpack = require('webpack')
const WebpackConfig = require('webpack-config')


module.exports = new WebpackConfig.Config()
  .extend('config/webpack.base.js')
  .merge({
    entry: {
      main: './index.js'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        beauty: false,
        mangle: {
          screw_ie8: false,
          keep_fnames: true
        },
        compress: {
          warnings: false,
          screw_ie8: true
        },
        comments: false
      })
    ]
  })
