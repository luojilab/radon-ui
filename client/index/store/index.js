import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import { 
//     getUser,
//     userLogout,
//     queryArticleById
// } from '../api'

const state = {
    User: {
        name: 'Awe',
        intro: '123123'
    },
    HeaderNav: {
        show: false,
        navs: [{
            text: '首页',
            route: {
                name: 'home'
            }
        }, {
            text: '文章',
            route: {
                name: 'article'
            }
        }, {
            text: '标签',
            route: {
                name: 'tag'
            }
        }]
    }
}

const mutations = {
    SET_HEADER_NAV (state, active) {
        state.HeaderNav.show = active
    }
}

const actions = {
    // for mobile nav
    showHeaderNav ({ commit }) {
        commit('SET_HEADER_NAV', true)
    },
    hideHeaderNav ({ commit }) {
        commit('SET_HEADER_NAV', false)
    }
}

const getters = {
    User: state => state.User,
    HeaderNav: state => state.HeaderNav
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store