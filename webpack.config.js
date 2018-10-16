const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname + '/app/index.js'),
    output: {
        path: path.resolve(__dirname+'/build'),
        filename: 'index.js',
        publicPath:'/build' //代表了server自动监测时需要查看的文件，主html文件要和这相同，不然无法监测
    },
    devtool:'eval-source-map',
    devServer: {
        contentBase: __dirname,
        compress:true,
        inline: true,
        hot:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            "env"
                        ]
                    },
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};