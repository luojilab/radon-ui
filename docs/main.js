import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import router from './router/index'
import highlight from 'highlight.js'
import marked from 'marked'
import RadonUI from '../src/components/install'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(RadonUI)

window.highlight = highlight
window.marked = marked

marked.setOptions({
    highlight: function (code) {
        return window.highlight.highlightAuto(code).value
    }
})

router.start(App, 'app')
