/* eslint-env node */
/* eslint-disable camelcase */

const path    = require('path'),
      webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname, '.'),
  entry   : [
    // the entry point of our app
    './src/index.jsx'
  ],
  output : {
    path       : path.resolve(__dirname, './dist'),
    filename   : '[name].bundle.js',
    publicPath : '/assets'
  },

  // devtool   : 'inline-source-map',
  devtool   : 'source-map',
  devServer : {
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
        options : { presets : ['latest', 'stage-3', 'react'] }
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
    new webpack.LoaderOptionsPlugin({
      minimize : true,
      debug    : false
    }),
    new webpack.optimize.UglifyJsPlugin({
      debug     : false,
      minimize  : true,
      sourceMap : true,
      output    : {
        screw_ie8 : true,
        comments  : false
      },
      compressor : {
        dead_code    : true,
        drop_console : true,
        warnings     : false,
        keep_fnames  : true
      },
      compress : {
        screw_ie8 : true
      },
      beautify : false,
      mangle   : {
        screw_ie8   : true,
        keep_fnames : true
      },
      comments : false
    })
  ]
};
