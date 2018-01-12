const webpack = require('webpack'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      OpenBrowserPlugin = require('open-browser-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      port = '8000';

const BUILD_DIR = path.resolve(__dirname,'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/app.js')
    ],
    output: {
        path: BUILD_DIR,
        filename: 'js/[name]-[hash].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
          '@': APP_DIR,
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    APP_DIR
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader',
                    use: 'css-loader?modules'
                }),
                include: [
                    APP_DIR
                ]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader',
                    use: 'css-loader?!less-loader'
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader',
                    use: 'css-loader?!sass-loader'
                }),
                include: [
                    APP_DIR
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf|webp)\??.*$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'media/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    devServer: {
        inline: true,
        port: port,
        proxy: {
            '/v1':{
                target: 'http://localhost:3002',
                pathRewrite: {
                '^/v1': '/v1'
                }
            }
        }
    },
    plugins: [
        //缩小打包体积
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        //分离打包后的css文件
        new ExtractTextPlugin({
            filename:  'css/style.css',
            allChunks: true
        }),
        //指定自动开启服务的浏览器
        new OpenBrowserPlugin({ url: 'http://localhost:'+port+'',browser: 'chrome' })
    ]
}

