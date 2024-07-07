const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    app: './app.js',
    demo1: {
      dependOn: 'app',
      import: './demo1.js',
    },
    demo2: './demo2.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  mode: 'production',
  optimization: {
    concatenateModules: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          mangle: false,
          format: { beautify: true },
        },
      }),
    ],
  },
}
