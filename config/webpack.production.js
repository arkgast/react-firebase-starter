const webpack = require('webpack')
const WebpackConfig = require('webpack-config')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * Review this two plugins, they seems to be pretty interesting
 * DllPlugin
 * SWPrecacheWebpackPlugin
 * */

module.exports = new WebpackConfig.Config()
  .extend('config/webpack.base.js')
  .merge({
    entry: {
      main: './index.js'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10240}),
      new webpack.HashedModuleIdsPlugin(),
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
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|html)$/,
        minRatio: 0.8
      }),
      new DuplicatePackageCheckerPlugin({
        verbose: true,
        emitError: true
      }),
      new BundleAnalyzerPlugin(),
      new OfflinePlugin()
    ]
  })
