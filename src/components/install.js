import modalIntall from './plugin/modal'
import loadingBarInstall from './plugin/loading-bar'
import notificationInstall from './plugin/notification'
import previewInstall from './plugin/preview'

/*eslint-disable*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.RadonUI = factory())
}(this, function () {
/*eslint-enable*/
    'use strict'
    function install (Vue, options = {
        Modal: true,
        Notification: true,
        Preview: true,
        LoadingBar: true
    }) {
        Vue.use(require('vue-animated-list'))

        let $root = null

        Vue.mixin({
            created () {
                if (!$root) {
                    if (this === this.$root) {
                        RadonInit(this)
                    }
                }
            }
        })

        const RadonInit = (vm) => {
            $root = vm

            if (options.Modal) {
                modalIntall(Vue, vm)
            }

            if (options.Notification) {
                notificationInstall(Vue, vm)
            }

            if (options.LoadingBar) {
                loadingBarInstall(Vue, vm)
            }

            if (options.Preview) {
                previewInstall(Vue, vm)
            }
        }
    }
    return install
}))
