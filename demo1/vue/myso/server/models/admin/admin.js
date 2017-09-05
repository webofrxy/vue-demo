'use strict'

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    user_name: String,
    password: String,
    id: Number,
    create_time: String,
    admin:{type: String, default: '管理员'},
    avatar:{type: String, default: 'default.jpg'},
    status: Number,//1.普通管理 2.超级管理
    city: String,


});
adminSchema.index({id: 1}) //建立正序索引，便于查询，1为正序，-1是倒序
const Admin = mongoose.model('admin', adminSchema)

export default Admin;