const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  context: resolve(__dirname, '../src'),
  output: {
    filename: 'js/[name].[hash].js',
    path: resolve(__dirname, '../public'),
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: resolve(__dirname, '../src')
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Firebase React Starter',
      template: 'index.html',
      inject: true,
      hash: true,
      minify: {
        caseSensitive: true,
        collapseWhitespace: false
      },
      chunkSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
}
