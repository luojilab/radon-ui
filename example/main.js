import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './router/index'
import { RadonInstall } from '../src/components/utils'
Vue.use(VueResource)
Vue.use(VueRouter)

RadonInstall(Vue)

router.start(App, 'app')

