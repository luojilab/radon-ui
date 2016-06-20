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
    '/radio': {
        name: 'radio',
        component: (resolve) => {
            require(['../views/radio.vue'], resolve)
        }
    },
    '/datepicker': {
        name: 'datepicker',
        component: (resolve) => {
            require(['../views/datepicker.vue'], resolve)
        }
    },
    '/slider': {
        name: 'slider',
        component: (resolve) => {
            require(['../views/slider.vue'], resolve)
        }
    },
    '/switch': {
        name: 'switch',
        component: (resolve) => {
            require(['../views/switch.vue'], resolve)
        }
    },
    '/textfield': {
        name: 'textfield',
        component: (resolve) => {
            require(['../views/textfield.vue'], resolve)
        }
    },
    '/timeline': {
        name: 'timeline',
        component: (resolve) => {
            require(['../views/timeline.vue'], resolve)
        }
    },
    '/cascader': {
        name: 'cascader',
        component: (resolve) => {
            require(['../views/cascader.vue'], resolve)
        }
    },
    '/select': {
        name: 'select',
        component: (resolve) => {
            require(['../views/select.vue'], resolve)
        }
    },
    '/modal': {
        name: 'modal',
        component: (resolve) => {
            require(['../views/modal.vue'], resolve)
        }
    },
    '/alert': {
        name: 'alert',
        component: (resolve) => {
            require(['../views/alert.vue'], resolve)
        }
    },
    '/progress': {
        name: 'progress',
        component: (resolve) => {
            require(['../views/progress.vue'], resolve)
        }
    },
    '/table': {
        name: 'table',
        component: (resolve) => {
            require(['../views/table.vue'], resolve)
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
