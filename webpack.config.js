const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        contentBase: '/public',
        hot: true,
        historyApiFallback: true
    },

    entry: ['babel-polyfill', "webpack-hot-middleware/client?reload=true", path.join(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js",
        publicPath: "/"


    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=[name].[ext]",
            }, {
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

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.join(__dirname, 'src','index.html')
        }),
            new webpack.DefinePlugin({
            'process.env':{
           'NODE_ENV':JSON.stringify('production')
        }
        }),new webpack.HotModuleReplacementPlugin(),

    ]
};