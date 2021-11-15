const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  output: {
    publicPath: '/',
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    publicPath: '/',
    port: 9000,
    contentBase: path.join(__dirname, 'dist'), // static file location
    host: 'localhost',
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    hot: true  // hot module replacement. Depends on HotModuleReplacementPlugin
  }
});