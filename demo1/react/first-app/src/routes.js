import React from 'react'
//IndexRoute就是根路由默认显示的
import {Route, IndexRoute} from 'react-router'
//从src/containers/index.js导入
import {App, Home} from './containers'

//这里IndexRoute入在根app下后，就是在App页面组件的props.children
//匹配规则参考官方文档
export default (
  <Route name='app' path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
)
