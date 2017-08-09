# myso

##首先我们要整理好整个工作流程： 
###1. 前后端分离，各自开发。这里前后端分离是这样的：前端用Vue开发静态页面，路由通过Vue-Router进行，后端用Node仅用于编写API给前端调用获取数据。 
###2. 前端开发时通过Vue-Cli中提供的proxyTable进行代理，由此可跨域调用Node编写的API。 
###3. 前后端各自开发完成，测试无误后，前端通过webpack打包压缩，后端拉取前端打包压缩好的文件即部署完成。
###4. 注意：前端要热启动，后端要热启动，数据库要热启动

chalk

解释 
命令行彩色输出。

使用

var chalk = require('chalk')
console.log(chalk.yellow('....'))

semver

解释 
npm以及package.json解析版本号时的辅助模块，更为语义化。

使用

var semver = require('semver')
semver.clean(process.version)
semver.clean('  =v1.2.3   ') // '1.2.3' 

semver.satisfies(aug1,aug2)
semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true

semver.gt('1.2.3', '9.8.7') // false
semver.lt('1.2.3', '9.8.7') // true

相关文档 
https://www.npmjs.com.cn/misc/semver/

child_process

解释 
子进程模块。

使用

require('child_process').execSync

相关文档 
http://nodejs.cn/api/child_process.html

opn

解释 
自动用浏览器打开相应路径。

用法

var opn = require('opn')
opn(uri)

path

解释 
路径模块。

用法

var path = require('path')
path.join(__dirname, '..', dir)
path.resolve(__dirname, '../src/components')

相关文档 
http://www.runoob.com/nodejs/nodejs-path-module.html

http-proxy-middleware

解释 
单线程Node.js代理中间件，用于连接，快速和浏览器同步

用法

var proxy = require('http-proxy-middleware')
var apiProxy = proxy('/api', {target: 'http://www.example.org'});
//                   \____/   \_____________________________/ 
//                     |                    | 
//                   context             options 

// context：确定应将哪些请求代理到目标主机
// options.target：目标主机到代理

// proxy middleware options 
var options = {
        target: 'http://www.example.org', // target host 
        changeOrigin: true,               // needed for virtual hosted sites 
        ws: true,                         // proxy websockets 
        pathRewrite: {
            '^/api/old-path' : '/api/new-path',     // rewrite path 
            '^/api/remove/path' : '/path'           // remove base path 
        },
        router: {
            // when request.headers.host == 'dev.localhost:3000', 
            // override target 'http://www.example.org' to 'http://localhost:8000' 
            'dev.localhost:3000' : 'http://localhost:8000'
        }
    };

相关文档 
http://blog.csdn.net/xmloveth/article/details/56847456

webpack

解释 
前端资源模块化管理和打包工具。

用法

var webpack = require('webpack')
var complier = webpack({})

webpack-dev-middleware

解释 
热重载模块。

用法

var webpackMiddleware = require('webpack-dev-middleware');
// app是模拟服务器
app.use(webpackMiddleware(...));

// 例子
app.use(webpackMiddleware(webpack({
    // webpack选项
    // webpackMiddlewarer需要用一个编译器对象作为第一个参数
    // 编译器为webpack(...)
    entry: "...",
    output: {
        path: "/"
        // 不需要具体路径，直接传递"/"
        // 其他路径也是这样
    }
}), {
    // 公共路径是必须的，不然其他所有选项都是可选的

    noInfo: false,
    // 控制台除了警告和错误不展示其他信息

    quiet: false,
    // 不在控制台展示信息

    lazy: true,
    // 懒加载模式
    // that means no watching, but recompilation on every request

    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    // watch options (only lazy: false)

    publicPath: "/assets/",
    // public path to bind the middleware to
    // use the same as in webpack

    index: "index.html",
    // the index path for web server

    headers: { "X-Custom-Header": "yes" },
    // custom headers

    stats: {
        colors: true
    },
    // options for formating the statistics

    reporter: null,
    // Provide a custom reporter to change the way how logs are shown.

    serverSideRender: false,
    // Turn off the server-side rendering mode. See Server-Side Rendering part for more info.
}));

扩展（高级API）



   // 1.close(callback) - stop watching for file changes

     var webpackDevMiddlewareInstance = webpackMiddleware(/* see example usage */);
     app.use(webpackDevMiddlewareInstance);
     // After 10 seconds stop watching for file changes:
     setTimeout(function(){
       webpackDevMiddlewareInstance.close();
     }, 10000);

  // 2.invalidate() - recompile the bundle - e.g. after you changed the configuration

     var compiler = webpack(/* see example usage */);
     var webpackDevMiddlewareInstance = webpackMiddleware(compiler);
     app.use(webpackDevMiddlewareInstance);
     setTimeout(function(){
       // After a short delay the configuration is changed
       // in this example we will just add a banner plugin:
       compiler.apply(new webpack.BannerPlugin('A new banner'));
       // Recompile the bundle with the banner plugin:
       webpackDevMiddlewareInstance.invalidate();
     }, 1000);

 //  3.waitUntilValid(callback) - executes the callback if the bundle is valid or after it is valid again:

     var webpackDevMiddlewareInstance = webpackMiddleware(/* see example usage */);
     app.use(webpackDevMiddlewareInstance);
     webpackDevMiddlewareInstance.waitUntilValid(function(){
       console.log('Package is in a valid state');
     });


相关文档 
https://github.com/webpack/webpack-dev-middleware

webpack-hot-middleware

解释 
同样是热加载模块

用法

1
1
html-webpack-plugin

解释 
这个插件可以帮助生成HTML文件，在body元素中，使用script来包含所有你的webpack bundles。

用法

var htmlWebpackPlugin = require('html-webpack-plugin')

module.export = merge(baseWebpackConfig, {
    ...
    plugins: [
        ...
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
})

相关文档 
http://www.cnblogs.com/haogj/p/5160821.html

FriendlyErrorsPlugin

解释 
这个插件可以识别某些特定的webpack错误，并优化它们来提供一个更好的开发环境。

用法

var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.export = merge(baseWebpackConfig, {
    ...
    plugins: [
        ...
        new FriendlyErrorsPlugin()
    ]
})

相关文档 
https://github.com/geowarin/friendly-errors-webpack-plugin

copy-webpack-plugin

解释 
这是个webpack插件用来将单个文件或者整个目录拷贝到build目录。

用法

var CopyWebpackPlugin = require('copy-webpack-plugin')

var webpackConfig = merge(baseWebpackConfig, {
    ...
    plugins: [
        ...
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]
})

相关文档 
https://github.com/kevlened/copy-webpack-plugin

extract-text-webpack-plugin

解释 
把类似.css的模块抽离出js文件，单独放到某个文件夹里。

用法

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var webpackConfig = merge(baseWebpackConfig, {
    ...
    plugins: [
        // extract css into its own file
        new ExtractTextPlugin({
          filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
    ]
})

相关文档 
https://github.com/webpack-contrib/extract-text-webpack-plugin

optimize-css-assets-webpack-plugin

解释 
优化css资源

用法

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
    ]
}

相关文档 
https://github.com/NMFR/optimize-css-assets-webpack-plugin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
