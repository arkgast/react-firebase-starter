const webpack = require('webpack')
const WebpackConfig = require('webpack-config')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * Review this two plugins, they seems to be pretty interesting
 * DllPlugin
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
      new CleanWebpackPlugin(['../public'], {
        allowExternal: true,
        exclude: [
          'manifest.json',
          'img/icons'
        ]
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        beauty: false,
        mangle: {
          screw_ie8: true,
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
        emitError: false
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }),
      new OfflinePlugin({
        autoUpdate: true,
        caches: {
          main: [':rest:'],
          additional: [':externals:']
        },
        externals: [
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
          'https://fonts.googleapis.com/icon?family=Material+Icons'
        ],
        responseStrategy: 'cache-first',
        safeToUseOptionalCaches: true,
        ServiceWorker: {
          navigateFallbackURL: '/',
          minify: true
        },
        AppCache: false
      })
    ]
  })
