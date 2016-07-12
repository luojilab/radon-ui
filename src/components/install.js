export default (Vue) => {
    Vue.use(require('vue-animated-list'))

    let $root

    Vue.prototype.$Radon = {
        setRoot (vm) {
            $root = vm
        }
    }

    Vue.prototype.$Notification = {
        remove (item, duration) {
            setTimeout(() => {
                $root.Notifications.$remove(item)
            }, duration)
        },
        success (title, content, duration) {
            let item = {
                type: 'success',
                title: title,
                content: content
            }
            $root.Notifications.push(item)
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
            $root.Notifications.push(item)
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
            $root.Notifications.push(item)
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
            $root.Notifications.push(item)
            if (duration) {
                this.remove(item, duration)
            }
        }
    }

    Vue.prototype.$Modal = {
        create (title, text, confirm, cancel) {
            $root.modal = {
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
            this.el.addEventListener('click', (e) => {
                e.stopPropagation()
                $root.preview = {
                    show: true,
                    current: {
                        title: '',
                        src: this.el.src
                    },
                    list: []
                }
            })
        },
        update: function (newValue, oldValue) {
        },
        unbind: function () {
        }
    })
}
