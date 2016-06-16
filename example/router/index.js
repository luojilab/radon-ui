import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['../views/index.vue'], resolve)
        }
    },
    '/button': {
        name: 'button',
        component: (resolve) => {
            require(['../views/button.vue'], resolve)
        }
    },
    '/checkbox': {
        name: 'checkbox',
        component: (resolve) => {
            require(['../views/checkbox.vue'], resolve)
        }
    },
    '/form': {
        name: 'from',
        component: (resolve) => {
            require(['../views/form.vue'], resolve)
        }
    },
    '/pagination': {
        name: 'from',
        component: (resolve) => {
            require(['../views/pagination.vue'], resolve)
        }
    }
})

export default router
