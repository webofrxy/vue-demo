# myso

##首先我们要整理好整个工作流程： 
###1. 前后端分离，各自开发。这里前后端分离是这样的：前端用Vue开发静态页面，路由通过Vue-Router进行，后端用Node仅用于编写API给前端调用获取数据。 
###2. 前端开发时通过Vue-Cli中提供的proxyTable进行代理，由此可跨域调用Node编写的API。 
###3. 前后端各自开发完成，测试无误后，前端通过webpack打包压缩，后端拉取前端打包压缩好的文件即部署完成。
###4. 注意：前端要热启动，后端要热启动，数据库要热启动

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
