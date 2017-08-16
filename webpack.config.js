const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Firebase React Starter',
      template: 'src/index.template.html',
      inject: true,
      hash: true,
      minify: {
        caseSensitive: true,
        collapseWhitespace: true
      },
      chunkSortMode: 'dependency'
    }),
    new CleanWebpackPlugin(['public'])
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'public')
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
  }
}
