'use strict'

import AdminModels from '../../models/admin/admin'

class Admin extends AddressComponent{
    constructor(){
        super();
        this.login = this.login.bind(this)
    }
    async login(req,res,next){
        const newAdmin = {
            username: 'jack',
            password: '111',
            id: 1,
            create_time: '2017-10-11 11:11',
            admin:{type: String, default: '管理员'},
            avatar:{type: String, default: 'default.jpg'},
            status,
            city: 'beijing',
        }
        await AdminModels.create(newAdmin);
        res.send({
            status: 1,
            success: '注册成功'
        })
    }
}