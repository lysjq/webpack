const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname +'/build'),
        filename: 'index.js',
        // publicPath:'/build/'  // string    // 输出解析文件的目录，url 相对于 HTML 页面
    },
    devtool:'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname + '/build'),
        compress:true,
        inline: true,
        hot:true // 需要插件HotModuleReplacementPlugin，否则加上hot：true可能会报错
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    },
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
};
