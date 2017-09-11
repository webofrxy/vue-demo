import vue from 'vue'
import vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'
import getters from './getters'
vue.use(vuex)

const state = {
    userInfo: {}
}
const store = new vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store;