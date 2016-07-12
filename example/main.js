import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import router from './router/index'
import highlight from 'highlight.js'
import marked from 'marked'
import RadonInstall from '../src/components/install'

Vue.use(VueResource)
Vue.use(VueRouter)

RadonInstall(Vue)

window.highlight = highlight

marked.setOptions({
    highlight: function (code) {
        return window.highlight.highlightAuto(code).value
    }
})

window.marked = marked

router.start(App, 'app')
