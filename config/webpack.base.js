const { resolve } = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const cssmqPacker = require('css-mqpacker')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV
let styleConfig = [{
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[local]'
  }
}, {
  loader: 'postcss-loader',
  options: {
    plugins: function () {
      var tmp = []
      if (env === 'production') {
        tmp = [
          cssnext,
          cssnano({ autoprefixer: false }),
          cssmqPacker
        ]
      }
      return tmp
    }
  }
}, {
  loader: 'sass-loader',
  options: {
    outputStyle: 'compressed'
  }
}]

if (env === 'development') {
  styleConfig.unshift('style-loader')
} else {
  styleConfig = ExtractTextPlugin.extract({
    use: styleConfig
  })
}

module.exports = {
  context: resolve(__dirname, '../src'),
  output: {
    filename: 'js/[name].[hash:5].js',
    chunkFilename: 'js/[name].[hash:5].chunk.js',
    path: resolve(__dirname, '../public'),
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: resolve(__dirname, '../src')
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: styleConfig
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Firebase React Starter',
      template: 'index.html',
      inject: true,
      minify: {
        caseSensitive: true,
        collapseWhitespace: false
      },
      chunkSortMode: 'dependency'
    }),
    env === 'production' ? new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:base64:5].css',
      allChunks: true
    }) : function () { }
  ]
}
