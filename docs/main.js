import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import router from './router/index'
import highlight from 'highlight.js'
import marked from 'marked'
import { RadonInstall } from 'radon-ui'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(RadonInstall)

marked.setOptions({
    highlight: function (code) {
        return window.highlight.highlightAuto(code).value
    }
})

window.highlight = highlight
window.marked = marked

router.start(App, 'app')
