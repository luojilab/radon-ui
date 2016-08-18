
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

        let $root

        Vue.prototype.$Radon = {
            setRoot (vm) {
                if (options.Modal) {
                    Vue.set(vm, 'RADON_MODAL', {
                        show: false,
                        title: '',
                        content: '',
                        cancel: () => {},
                        confirm: () => {}
                    })
                }

                if (options.Notification) {
                    Vue.set(vm, 'RADON_NOTIFICATION', [])
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
                }

                $root = vm
            }
        }

        Vue.prototype.$Notification = {
            remove (item, duration) {
                setTimeout(() => {
                    $root.RADON_NOTIFICATION.$remove(item)
                }, duration)
            },
            success (title, content, duration) {
                let item = {
                    type: 'success',
                    title: title,
                    content: content
                }
                $root.RADON_NOTIFICATION.push(item)
                if (duration) {
                    this.remove(item, duration)
                }
            },
            info (title, content, duration) {
                let item = {
                    type: 'info',
                    title: title,
                    content: content
                }
                $root.RADON_NOTIFICATION.push(item)
                if (duration) {
                    this.remove(item, duration)
                }
            },
            warning (title, content, duration) {
                let item = {
                    type: 'warning',
                    title: title,
                    content: content
                }
                $root.RADON_NOTIFICATION.push(item)
                if (duration) {
                    this.remove(item, duration)
                }
            },
            failed (title, content, duration) {
                let item = {
                    type: 'failed',
                    title: title,
                    content: content
                }
                $root.RADON_NOTIFICATION.push(item)
                if (duration) {
                    this.remove(item, duration)
                }
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
            }
        }

        Vue.directive('preview', {
            bind: function () {
                let previewItem = {
                    title: '',
                    el: this.el,
                    src: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
                }
                $root.RADON_PREVIEW.list.push(previewItem)

                this.el.addEventListener('click', (e) => {
                    e.stopPropagation()
                    $root.RADON_PREVIEW.show = true
                    $root.RADON_PREVIEW.current = previewItem
                })
            },
            update: function (newValue, oldValue) {
                let previewItem = $root.RADON_PREVIEW.list.find(item => {
                    return item.el === this.el
                })
                if (!previewItem) return
                previewItem.src = newValue
            },
            unbind: function () {
                if (this.el) {
                    $root.RADON_PREVIEW.list.forEach((item, index) => {
                        if (this.el === item.el) {
                            $root.RADON_PREVIEW.list.splice(index, 1)
                        }
                    })
                }
            }
        })
    }
    return install
}))
