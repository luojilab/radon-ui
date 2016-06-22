function throttle (callback, limit) {
    var wait = false
    return function () {
        if (!wait) {
            callback.call()
            wait = true
            setTimeout(function () {
                wait = false
            }, limit)
        }
    }
}

const RadonInstall = (Vue) => {
    Vue.use(require('vue-animated-list'))

    let $root

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

    Vue.prototype.$SetRoot = (vm) => {
        $root = vm.$root
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
}

const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
        return '0' + val
    }
    return val + ''
}

const ICON_MAP = {
    'success': 'ion-checkmark-circled',
    'failed': 'ion-close-circled',
    'warning': 'ion-alert-circled',
    'info': 'ion-information-circled',
    'loading': 'ion-load-a'
}

export {
    ICON_MAP,
    throttle,
    pad,
    RadonInstall
}
