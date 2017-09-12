'use strict';

// import admin from './admin'
const admin = require('./admin')

export default app => {
    app.use('./admin', admin) //app.use()用来给path匹配路径
}