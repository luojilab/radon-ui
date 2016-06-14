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
