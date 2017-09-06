'use strict'

import mongoose from 'mongoose';
// import config from 'config-lite';
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.once('open', () => {
    console.log('连接成功');
})
db.on('error', () => {
    console.error('连接失败');
    mongoose.disconnect();
})
db.on('close', () => {
    console.log('连接断开，请重新连接');
    mongoose.connect('mongodb://localhost/test', {server: {auto_connect: true}})
})