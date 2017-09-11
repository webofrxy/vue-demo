'use strict'

import AdminModels from '../../models/admin/admin'

class Admin extends AddressComponent{
    constructor(){
        super();
        this.login = this.login.bind(this)
    }
}