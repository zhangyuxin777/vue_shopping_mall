import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
const state = {
    titleBar: {
        title: '主页'
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
