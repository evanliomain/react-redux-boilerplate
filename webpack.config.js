/* eslint-env node */
/* eslint-disable camelcase */

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

  devtool   : 'cheap-module-eval-source-map',
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
      use  : [
        'style-loader',
        {
          loader  : 'css-loader',
          options : {
            modules        : true,
            importLoaders  : 1,
            localIdentName : '[path][name]__[local]--[hash:base64:5]'
          }
        },
        'postcss-loader'
      ]
    }, {
      test : /\.less$/,
      use  : [
        'style-loader',
        {
          loader  : 'css-loader',
          options : {
            modules        : true,
            importLoaders  : 1,
            localIdentName : '[path][name]__[local]--[hash:base64:5]'
          }
        },
        'less-loader',
        'postcss-loader'
      ]
    }]
  },

  plugins : [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ]
};
