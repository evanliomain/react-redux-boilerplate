/* eslint-env node */

const path    = require('path'),
      webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname, '.'),
  entry   : [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // the entry point of our app
    './src/index.jsx'
  ],
  output : {
    path       : path.resolve(__dirname, './dist'),
    filename   : '[name].bundle.js',
    publicPath : '/assets'
  },
  devtool   : 'inline-source-map',
  devServer : {
    // enable HMR on the server
    hot : true,

    contentBase : path.resolve(__dirname, './src'),

    // match the output `publicPath`
    publicPath : '/assets'
  },

  resolve : {
    extensions : ['.js', '.jsx']
  },

  module : {
    rules : [{
      test    : /\.jsx?$/,
      exclude : /node_modules/,
      use     : [{
        loader  : 'babel-loader',
        options : { presets : ['stage-3', 'react'] }
      }]
    }, {
      test : /\.css$/,
      use  : ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test : /\.less$/,
      use  : [
        'style-loader',
        { loader : 'css-loader', options : { importLoaders : 1 } },
        'less-loader',
        'postcss-loader'
      ]
    }]
  },

  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
};
