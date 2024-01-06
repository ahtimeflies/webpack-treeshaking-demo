const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    foo: './foo.js',
    bar: './bar.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()])
}
