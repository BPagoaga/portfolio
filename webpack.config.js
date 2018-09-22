var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'js/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};

module.exports = config;
