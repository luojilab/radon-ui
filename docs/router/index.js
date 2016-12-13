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
    '/basic/drop-button': {
        name: 'drop-button',
        component: (resolve) => {
            require(['../views/basic/dropButton.vue'], resolve)
        }
    },
    '/basic/tag': {
        name: 'tag',
        component: (resolve) => {
            require(['../views/basic/tag.vue'], resolve)
        }
    },
    'basic/table': {
        name: 'table',
        component: (resolve) => {
            require(['../views/basic/table.vue'], resolve)
        }
    },
    'basic/card': {
        name: 'card',
        component: (resolve) => {
            require(['../views/basic/card.vue'], resolve)
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
    'form/autosearch': {
        name: 'autosearch',
        component: (resolve) => {
            require(['../views/form/autoSearch.vue'], resolve)
        }
    },

    // Common
    'common/timeline': {
        name: 'timeline',
        component: (resolve) => {
            require(['../views/common/timeline.vue'], resolve)
        }
    },
    'common/alert': {
        name: 'alert',
        component: (resolve) => {
            require(['../views/common/alert.vue'], resolve)
        }
    },
    'common/spin': {
        name: 'spin',
        component: (resolve) => {
            require(['../views/common/spin.vue'], resolve)
        }
    },
    'common/tooltip': {
        name: 'tooltip',
        component: (resolve) => {
            require(['../views/common/tooltip.vue'], resolve)
        }
    },
    '/common/upload': {
        name: 'upload',
        component: (resolve) => {
            require(['../views/common/upload.vue'], resolve)
        }
    },
    '/common/audio': {
        name: 'audio',
        component: (resolve) => {
            require(['../views/common/audio.vue'], resolve)
        }
    },
    'common/progress': {
        name: 'progress',
        component: (resolve) => {
            require(['../views/common/progress.vue'], resolve)
        }
    },
    'common/tree': {
        name: 'tree',
        component: (resolve) => {
            require(['../views/common/tree.vue'], resolve)
        }
    },

    // Global
    'global/loadingbar': {
        name: 'loadingbar',
        component: (resolve) => {
            require(['../views/global/loadingbar.vue'], resolve)
        }
    },
    'global/notification': {
        name: 'notification',
        component: (resolve) => {
            require(['../views/global/notification.vue'], resolve)
        }
    },
    'global/modal': {
        name: 'modal',
        component: (resolve) => {
            require(['../views/global/modal.vue'], resolve)
        }
    },
    'global/preview': {
        name: 'preview',
        component: (resolve) => {
            require(['../views/global/preview.vue'], resolve)
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

router.beforeEach(function (transition) {
    transition.to.router.app.$Loading.start()
    transition.next()
})

router.afterEach((transition) => {
    transition.to.router.app.$Loading.finish()
})

export default router
