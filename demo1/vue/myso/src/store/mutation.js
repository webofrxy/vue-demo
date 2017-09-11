import {
    GETLOGIN
} from './type.js'

export default {
    [GETLOGIN]: function(state,info){
        state.userInfo = info;
        console.log(state.userInfo)
    }
}