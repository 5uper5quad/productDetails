var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: path.resolve(__dirname, './client/app.jsx'),
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
     loaders : [
        {
          test : /\.jsx?/,
          include : __dirname,
          loader : 'babel-loader',
        }
      ]
  }
  
}
