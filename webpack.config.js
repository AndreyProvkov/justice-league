const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV = 'development';
const isProd = !isDev;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './js/index.js',
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: isDev ? 'source-map' : false,
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        hot: false,
        liveReload: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/i,
                loader: 'pug-loader',
                options: {  
                    pretty: isDev ? true : false,
                },
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.m?js/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './index.pug',
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
    ],
};