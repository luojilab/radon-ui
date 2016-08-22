import {
    rdModal,
    rdNotification,
    rdPreview
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
        Preview: true
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
    }
    return install
}))
