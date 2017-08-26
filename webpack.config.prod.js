const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true

  },
  entry: ['babel-polyfill', "webpack-hot-middleware/client?reload=true", path.join(__dirname, 'src', 'index.js')],
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js',
    publicPath: '/'

  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html'
    }),new webpack.DefinePlugin({
      'process.env':{
      'NODE_ENV':JSON.stringify('production')
      }
    }),new webpack.HotModuleReplacementPlugin(),

  ],
  module: {
    loaders: [{
        test: /.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },

};