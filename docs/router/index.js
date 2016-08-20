import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    // Index
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['../views/index/index.vue'], resolve)
        }
    },
    '/install': {
        name: 'install',
        component: (resolve) => {
            require(['../views/index/install.vue'], resolve)
        }
    },
    '/resource': {
        name: 'resource',
        component: (resolve) => {
            require(['../views/index/resource.vue'], resolve)
        }
    },

    // Basic
    '/basic/button': {
        name: 'button',
        component: (resolve) => {
            require(['../views/basic/button.vue'], resolve)
        }
    },
    '/basic/audio': {
        name: 'audio',
        component: (resolve) => {
            require(['../views/basic/audio.vue'], resolve)
        }
    },
    '/basic/upload': {
        name: 'upload',
        component: (resolve) => {
            require(['../views/basic/upload.vue'], resolve)
        }
    },

    // Form
    'form/checkbox': {
        name: 'checkbox',
        component: (resolve) => {
            require(['../views/form/checkbox.vue'], resolve)
        }
    },
    'form/radio': {
        name: 'radio',
        component: (resolve) => {
            require(['../views/form/radio.vue'], resolve)
        }
    },
    'form/datepicker': {
        name: 'datepicker',
        component: (resolve) => {
            require(['../views/form/datepicker.vue'], resolve)
        }
    },
    'form/slider': {
        name: 'slider',
        component: (resolve) => {
            require(['../views/form/slider.vue'], resolve)
        }
    },
    'form/switch': {
        name: 'switch',
        component: (resolve) => {
            require(['../views/form/switch.vue'], resolve)
        }
    },
    'form/textfield': {
        name: 'textfield',
        component: (resolve) => {
            require(['../views/form/textfield.vue'], resolve)
        }
    },
    'form/number': {
        name: 'number',
        component: (resolve) => {
            require(['../views/form/number.vue'], resolve)
        }
    },
    'form/cascader': {
        name: 'cascader',
        component: (resolve) => {
            require(['../views/form/cascader.vue'], resolve)
        }
    },
    'form/select': {
        name: 'select',
        component: (resolve) => {
            require(['../views/form/select.vue'], resolve)
        }
    },
    'form/table': {
        name: 'table',
        component: (resolve) => {
            require(['../views/form/table.vue'], resolve)
        }
    },

    // Presentation
    'presentation/progress': {
        name: 'progress',
        component: (resolve) => {
            require(['../views/presentation/progress.vue'], resolve)
        }
    },
    'presentation/timeline': {
        name: 'timeline',
        component: (resolve) => {
            require(['../views/presentation/timeline.vue'], resolve)
        }
    },
    'presentation/notification': {
        name: 'notification',
        component: (resolve) => {
            require(['../views/presentation/notification.vue'], resolve)
        }
    },
    'presentation/modal': {
        name: 'modal',
        component: (resolve) => {
            require(['../views/presentation/modal.vue'], resolve)
        }
    },
    'presentation/preview': {
        name: 'preview',
        component: (resolve) => {
            require(['../views/presentation/preview.vue'], resolve)
        }
    },
    'presentation/alert': {
        name: 'alert',
        component: (resolve) => {
            require(['../views/presentation/alert.vue'], resolve)
        }
    },
    'presentation/spin': {
        name: 'spin',
        component: (resolve) => {
            require(['../views/presentation/spin.vue'], resolve)
        }
    },
    'presentation/tooltip': {
        name: 'tooltip',
        component: (resolve) => {
            require(['../views/presentation/tooltip.vue'], resolve)
        }
    },

    // Navigation
    'navigation/breadcrumb': {
        name: 'breadcrumb',
        component: (resolve) => {
            require(['../views/navigation/breadcrumb.vue'], resolve)
        }
    },
    'navigation/pagination': {
        name: 'pagination',
        component: (resolve) => {
            require(['../views/navigation/pagination.vue'], resolve)
        }
    },

    // Other
    '/form': {
        name: 'from',
        component: (resolve) => {
            require(['../views/form.vue'], resolve)
        }
    }
})

router.beforeEach((transition, next) => {
    window.scrollTo(0, 0)
    transition.next()
})

export default router
