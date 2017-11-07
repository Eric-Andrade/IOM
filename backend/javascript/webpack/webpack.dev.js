const { resolve } = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    srcDir = resolve(__dirname, '../src'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules:[{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'standard-loader',
            exclude: /node_modules/
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015', 'react']
            }
        },{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader',
                options:{
                    modules: true,
                    localIdentName: '[name]-[hash:base64:6]-[local]',
                    camelCase: true
                }
            }]
            // loader: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: [{loader: 'css-loader?modules,localIdentName="[name]-[hash:base64:6]-[local]"'}]
            // })
        }]
    },
    resolve: {
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
        }
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: `${srcDir}/index.html`
        }), 
        new ExtractTextPlugin('[name].[contenthash:8].css'),
        new DashboardPlugin(),
    ]
}
