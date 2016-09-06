import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import router from './router/index'

import { RadonInstall } from 'radon-ui'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(RadonInstall)

router.start(App, 'app')
