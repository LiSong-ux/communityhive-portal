import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        isLogin(state) {
            return state.user != null;
        },
        getUser(state) {
            return state.user;
        }
    },
    actions: {},
    modules: {}
})
