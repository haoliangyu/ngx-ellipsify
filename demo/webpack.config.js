const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    app: __dirname + '/app.ts'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].[hash].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: ['awesome-typescript-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      inject: true
    }),
  ]
};
