"use strict";
var path = require('path');
var webpack = require('webpack');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PORT = 9000;

module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders
  },
  devServer: {
    proxy : {
      '/oauth2/*' : {
        target :'https://redbooth.com',
        changeOrigin: true,
        secure: false
      },
      '/api/*' : {
        target :'https://redbooth.com',
        changeOrigin: true,
        secure: false
      }
    },
    // do not print bundle build stats
    noInfo: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: 'src/index.html'
    })
  ]
};



