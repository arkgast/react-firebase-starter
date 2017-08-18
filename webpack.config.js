const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 3000,
    hot: true,
    contentBase: resolve(__dirname, 'public')
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
      template: 'index.template.html',
      inject: true,
      hash: true,
      minify: {
        caseSensitive: true,
        collapseWhitespace: false
      },
      chunkSortMode: 'dependency'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
