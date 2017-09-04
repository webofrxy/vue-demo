require('./check-versions')() //执行npm run dev 时，首先执行dev-server.js 文件，然后执行该模块，检查node和npm 的版本

var config = require('../config') //引入相关的插件和配置
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn') //opn 用于打开特定的终端，此文件用于在浏览器中打开链接 opn（url）
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port //默认的端口
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser //默认打开浏览器
// Define HTTP proxies to your custom API backend （定义后台的api接口的代理）
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable //(使用config文件下的index文件下的proxyTable 配置选项，输出代理的接口)

var app = express() //创建express 服务器
var compiler = webpack(webpackConfig) //创建webpack编译器

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath, //动态匹配地址
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes，用于实现热重载功能的中间件，发布重载动作使页面重载
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests，将proxy代理请求挂载到express服务器上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API，重定向不存在的url，常用于SPA
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output，使用webpack开发的中间件将编译好的放在内存中的文件资源挂到express服务器上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display，将热重载的中间件挂到express服务器上
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')//webpack中间件合法（valid）之后输出提示语到控制台，表明服务器已经启动
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)//启动服务器并监听指定的端口

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
