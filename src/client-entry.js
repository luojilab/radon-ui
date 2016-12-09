import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueResource from 'vue-resource'
import highlight from 'highlight.js'
import marked from 'marked'
import { RadonInstall } from 'radon-ui'

Vue.use(VueResource)
Vue.use(RadonInstall)

marked.setOptions({
    highlight: function (code) {
        return window.highlight.highlightAuto(code).value
    }
})

window.highlight = highlight
window.marked = marked

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
