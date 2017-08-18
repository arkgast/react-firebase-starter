const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  context: resolve(__dirname, '../src'),
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, '../public'),
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
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
    })
  ]
}
