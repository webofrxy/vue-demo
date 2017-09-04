const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = { //经过测试得到：配置文件的名称必须叫webpack.config.js,package.json中start是特殊的脚本名称，如果不是则需要写成npm run {script name} 如npm run build
    devtool: 'source-map',
    entry: __dirname+'/app/main.js',//入口文件
    output: {
        path: __dirname+'/dist', //打包后文件的存放位置
        filename: 'bundle-[hash].js' //打包后的文件名称
    },
    devServer: {
        contentBase: './dist', //本地服务器加载所在的文件的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [//这里是同一个文件引入多个loader的写法
                    {
                        loader: "style-loader" //可以使用计算后的样式
                    },
                    {
                        loader: "css-loader", //可以将css样式通过@import和url()导入
                        options:{
                            module: true, //css模块化，可以在不同的模块中使用相同的类名
                        }
                    },
                    
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname+"/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        
    ]
}