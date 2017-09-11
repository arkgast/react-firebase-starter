const { resolve } = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
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
      return [cssmqPacker, autoprefixer]
    },
    sourceMap: true
  }
}, {
  loader: 'resolve-url-loader',
  options: {
    sourceMap: true
  }
}, {
  loader: 'sass-loader',
  options: {
    outputStyle: 'compressed',
    sourceMap: true
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
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: '.babel-cache'
        }
      }],
      exclude: /node_modules/,
      include: resolve(__dirname, '../src')
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: styleConfig
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loaders: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash:base64:5].[ext]',
          publicPath: '/',
          outputPath: 'img/'
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          progressive: true,
          gifsicle: {
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          mozjpeg: {
            quality: 70
          }
        }
      }
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new CleanWebpackPlugin(['../public'], { allowExternal: true }),
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
