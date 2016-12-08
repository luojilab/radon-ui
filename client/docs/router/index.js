import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        // Index
        {
            name: 'index',
            path: '/',
            component: (resolve) => {
                require(['../views/index/index.vue'], resolve)
            }
        }, {
            name: 'install',
            path: '/install',
            component: (resolve) => {
                require(['../views/index/install.vue'], resolve)
            }
        }, {
            name: 'resource',
            path: '/resource',
            component: (resolve) => {
                require(['../views/index/resource.vue'], resolve)
            }
        },

        // Basic
        {
            name: 'button',
            path: '/basic/button',
            component: (resolve) => {
                require(['../views/basic/button.vue'], resolve)
            }
        }, {
            name: 'drop-button',
            path: '/basic/drop-button',
            component: (resolve) => {
                require(['../views/basic/dropButton.vue'], resolve)
            }
        }, {
            name: 'tag',
            path: '/basic/tag',
            component: (resolve) => {
                require(['../views/basic/tag.vue'], resolve)
            }
        }, {
            name: 'table',
            path: '/basic/table',
            component: (resolve) => {
                require(['../views/basic/table.vue'], resolve)
            }
        }, {
            name: 'card',
            path: '/basic/card',
            component: (resolve) => {
                require(['../views/basic/card.vue'], resolve)
            }
        }, {
            name: 'swipe',
            path: '/basic/swipe',
            component: (resolve) => {
                require(['../views/basic/swipe.vue'], resolve)
            }
        },

        // Form
        {
            name: 'checkbox',
            path: '/form/checkbox',
            component: (resolve) => {
                require(['../views/form/checkbox.vue'], resolve)
            }
        }, {
            name: 'radio',
            path: '/form/radio',
            component: (resolve) => {
                require(['../views/form/radio.vue'], resolve)
            }
        }, {
            name: 'datepicker',
            path: '/form/datepicker',
            component: (resolve) => {
                require(['../views/form/datepicker.vue'], resolve)
            }
        }, {
            name: 'slider',
            path: '/form/slider',
            component: (resolve) => {
                require(['../views/form/slider.vue'], resolve)
            }
        }, {
            name: 'switch',
            path: '/form/switch',
            component: (resolve) => {
                require(['../views/form/switch.vue'], resolve)
            }
        }, {
            name: 'textfield',
            path: '/form/textfield',
            component: (resolve) => {
                require(['../views/form/textfield.vue'], resolve)
            }
        }, {
            name: 'number',
            path: '/form/number',
            component: (resolve) => {
                require(['../views/form/number.vue'], resolve)
            }
        }, {
            name: 'cascader',
            path: '/form/cascader',
            component: (resolve) => {
                require(['../views/form/cascader.vue'], resolve)
            }
        },
        {
            name: 'select',
            path: '/form/select',
            component: (resolve) => {
                require(['../views/form/select.vue'], resolve)
            }
        },

        // Common
        {
            name: 'timeline',
            path: '/common/timeline',
            component: (resolve) => {
                require(['../views/common/timeline.vue'], resolve)
            }
        },
        {
            name: 'alert',
            path: '/common/alert',
            component: (resolve) => {
                require(['../views/common/alert.vue'], resolve)
            }
        },
        {
            name: 'spin',
            path: '/common/spin',
            component: (resolve) => {
                require(['../views/common/spin.vue'], resolve)
            }
        },
        {
            name: 'tooltip',
            path: '/common/tooltip',
            component: (resolve) => {
                require(['../views/common/tooltip.vue'], resolve)
            }
        },
        {
            name: 'upload',
            path: '/common/upload',
            component: (resolve) => {
                require(['../views/common/upload.vue'], resolve)
            }
        },
        {
            name: 'audio',
            path: '/common/audio',
            component: (resolve) => {
                require(['../views/common/audio.vue'], resolve)
            }
        },
        {
            name: 'progress',
            path: '/common/progress',
            component: (resolve) => {
                require(['../views/common/progress.vue'], resolve)
            }
        },
        {
            name: 'tree',
            path: '/common/tree',
            component: (resolve) => {
                require(['../views/common/tree.vue'], resolve)
            }
        },

        // Global
        {
            name: 'loadingbar',
            path: '/global/loadingbar',
            component: (resolve) => {
                require(['../views/global/loadingbar.vue'], resolve)
            }
        },
        {
            name: 'notification',
            path: '/global/notification',
            component: (resolve) => {
                require(['../views/global/notification.vue'], resolve)
            }
        },
        {
            name: 'modal',
            path: '/global/modal',
            component: (resolve) => {
                require(['../views/global/modal.vue'], resolve)
            }
        },
        {
            name: 'preview',
            path: '/global/preview',
            component: (resolve) => {
                require(['../views/global/preview.vue'], resolve)
            }
        },

        // Navigation
        {
            name: 'breadcrumb',
            path: '/navigation/breadcrumb',
            component: (resolve) => {
                require(['../views/navigation/breadcrumb.vue'], resolve)
            }
        },
        {
            name: 'pagination',
            path: '/navigation/pagination',
            component: (resolve) => {
                require(['../views/navigation/pagination.vue'], resolve)
            }
        },

        // Other
        {
            name: 'from',
            path: '/form',
            component: (resolve) => {
                require(['../views/form.vue'], resolve)
            }
        }
    ]
})


router.beforeEach((to, from, next) => {
    router.app.$Loading.start()
    next()
})

router.afterEach(() => {
    router.app.$Loading.finish()
})

export default router
