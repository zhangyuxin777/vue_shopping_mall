/**
 * webpack 配置
 * @author zhengchao
 * @Date 2017-05-09
 */

const path = require('path');
var config = require('./config');
var utils = require('./build/utils');
var vueLoaderConfig = require('./build/vue-loader.conf');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const devUrl = 'http://localhost:3000';
const mockUrl = 'http://localhost:3004';

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: __dirname,
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [resolve('src'), resolve('test')],
                exclude: path.join(__dirname, '..', 'src', 'js'),
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader")
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1000,
                    name: utils.assetsPath('image/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            $: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            //上下文目录，用于支持虚拟目录
            'contentPath': '"/"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new OpenBrowserPlugin({
            url: devUrl
        })
    ],
    eslint: {
        configFile: '.eslintrc'
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['react-html-attrs']
    },
    devtool: '#source-map',
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/v1/*': {
                // target: 'http://dev.okex.com:8000',
                // target: 'http://localhost:3004',
                // target: mockUrl,
                target: {
                    host: 'localhost',
                    protocol: 'http',
                    port: 3004
                },
                // ignorePath: true,
                changeOrigin: true,
                secure: false
            }
        },
        // host: 'localhost',
        // port: 3004,
        hot: true,
        inline: true,
        progress: true,
        stats: {colors: true}
    }
};
