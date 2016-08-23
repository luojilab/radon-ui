import {
    rdModal,
    rdNotification,
    rdPreview,
    rdLoadingbar
} from './index'

import preview from './directive/preview'

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
        Progress: true
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
                Vue.set(vm, 'RADON_MODAL', {
                    show: false,
                    title: '',
                    content: '',
                    cancel: () => {},
                    confirm: () => {}
                })
                Vue.component('rd-modal', rdModal)
            }

            if (options.Notification) {
                Vue.set(vm, 'RADON_NOTIFICATION', [])
                Vue.component('rd-notification', rdNotification)
            }

            if (options.Progress) {
                Vue.set(vm, 'RADON_LOADING_BAR', {
                    percent: 0,
                    options: {
                        canSuccess: true,
                        color: 'rgb(143, 255, 199)',
                        failedColor: 'red',
                        show: false,
                        height: '2px'
                    }
                })
                Vue.component('rd-loadingbar', rdLoadingbar)
            }

            if (options.Preview) {
                Vue.set(vm, 'RADON_PREVIEW', {
                    show: false,
                    current: {
                        title: '在实际传输数据之前，需要完成几个步骤',
                        src: 'http://covteam.u.qiniudn.com/poster.png'
                    },
                    list: []
                })
                Vue.component('rd-preview', rdPreview)
                preview(Vue, $root)
            }
        }

        Vue.prototype.$Notification = {
            remove (item, duration) {
                setTimeout(() => {
                    $root.RADON_NOTIFICATION.$remove(item)
                }, duration)
            },
            create (type, title, content, duration) {
                let item = {
                    type: type,
                    title: title,
                    content: content
                }
                $root.RADON_NOTIFICATION.push(item)
                if (duration) {
                    this.remove(item, duration)
                }
            },
            success (title, content, duration) {
                this.create('success', title, content, duration)
            },
            info (title, content, duration) {
                this.create('info', title, content, duration)
            },
            warning (title, content, duration) {
                this.create('warning', title, content, duration)
            },
            failed (title, content, duration) {
                this.create('failed', title, content, duration)
            }
        }

        Vue.prototype.$Modal = {
            create (title, text, confirm, cancel) {
                $root.RADON_MODAL = {
                    show: true,
                    title: title,
                    content: text,
                    cancel: cancel,
                    confirm: confirm
                }
            },
            clear () {
                $root.RADON_MODAL = {
                    show: false,
                    title: '',
                    content: '',
                    cancel: () => {},
                    confirm: () => {}
                }
            }
        }

        Vue.prototype.$Progress = {
            start (time) {
                if (!time) time = 3000
                $root.RADON_LOADING_BAR.percent = 0
                $root.RADON_LOADING_BAR.options.show = true
                $root.RADON_LOADING_BAR.options.canSuccess = true
                let cut = 10000 / Math.floor(time)
                let timer = setInterval(() => {
                    this.increase(cut * Math.random())
                    if ($root.RADON_LOADING_BAR.percent > 95) {
                        this.finish()
                        clearInterval(timer)
                    }
                }, 100)
            },
            set (num) {
                $root.RADON_LOADING_BAR.options.show = true
                $root.RADON_LOADING_BAR.options.canSuccess = true
                $root.RADON_LOADING_BAR.percent = Math.floor(num)
            },
            get (num) {
                return Math.floor($root.RADON_LOADING_BAR.percent)
            },
            increase (num) {
                $root.RADON_LOADING_BAR.percent = $root.RADON_LOADING_BAR.percent + Math.floor(num)
            },
            decrease (num) {
                $root.RADON_LOADING_BAR.percent = $root.RADON_LOADING_BAR.percent - Math.floor(num)
            },
            finish () {
                $root.RADON_LOADING_BAR.percent = 100
                setTimeout(() => {
                    $root.RADON_LOADING_BAR.options.show = false
                }, 800)
            },
            failed () {
                $root.RADON_LOADING_BAR.options.canSuccess = false
                $root.RADON_LOADING_BAR.percent = 100
                setTimeout(() => {
                    $root.RADON_LOADING_BAR.options.show = false
                }, 800)
            }
        }
    }
    return install
}))
