const { resolve } = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    OfflinePlugin = require('offline-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
        app: `./index.js`,
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:6].js',
        publicPath: '/'
    },
    module:{
        rules:[{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[hash:base64:6]-[local]",camelCase'])
        }]
    },
    devtool: 'source-map',
    performance:{
        hints: 'error'
    },
    resolve: {
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: resolve(__dirname, '..')
        }),
        new ExtractTextPlugin('styles.[contenthash:8].css'),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: `./index.html`
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new OfflinePlugin()
    ]
}

// TODO: dist file < peso al hacer build [Corregido]
// TODO: hacer que predeploy funcione 50:00 [Corregido]
// TODO: Status 200 al cargar en Network 52:25 [Corregido]