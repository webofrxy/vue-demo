'use strict'
import Base from './base.js'

export default class extends Base{
    /**
     * index Action
     * @return {Promise} []
    */
    indexAction(){
        this.assign('title',"this is a new webpage");
        return this.display();
    }
}