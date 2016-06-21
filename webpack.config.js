var webpack = require('webpack');
var path = require('path');
var Promise = require('es6-promise').Promise;

module.exports = {
  entry: [
    'babel-polyfill',
    './client/index.js',
    './client/styles/style.styl'
  ],

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ] : [],

  module: {
    loaders: [
      // js
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        },
        include: path.join(__dirname, 'client')
      },
      // CSS
      { 
        test: /\.styl$/, 
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
