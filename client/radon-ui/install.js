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
        // const RADON_EVENT_BUS = new Vue({})
        // window.RADON_EVENT_BUS = RADON_EVENT_BUS

        const RadonInit = (vm) => {
            let data = {
                data: {}
            }
            if (options.Modal) {
                modalIntall(Vue, data, window)
            }

            if (options.Notification) {
                notificationInstall(Vue, data, window)
            }

            if (options.LoadingBar) {
                loadingBarInstall(Vue, data, window)
            }

            if (options.Preview) {
                previewInstall(Vue, data, window)
            }

            const RADON_EVENT_BUS = new Vue(data)
            Vue.prototype.$RADON_EVENT_BUS = RADON_EVENT_BUS
            window.RADON_EVENT_BUS = RADON_EVENT_BUS
        }

        Vue.prototype.cov = function () {
            console.log(this)
        }

        RadonInit()
    }
    return install
}))
