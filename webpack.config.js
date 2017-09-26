var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

process.traceDeprecation = true;

module.exports = {
  entry: __dirname + "/static/src/app.js",
  output: {
    path: __dirname + '/static/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'es2015', 'react', 'stage-0']
        }
      },
      { test: /\.json/, loader: 'json-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css', 
      disable: false,
      allChunks: true
    })
  ],

  resolve: {
    modules: ['bower_components', 'node_modules'],
    descriptionFiles: ["package.json", "bower.json"],
  // you can now require('file') instead of require('file.coffee')
    extensions: ['.js', '.jsx', '.json', '.coffee']
  }
};
