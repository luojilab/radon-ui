import {
    rdNotification
} from '../index'

export default (Vue, $root) => {
    Vue.set($root, 'RADON_NOTIFICATION', [])
    Vue.component('rd-notification', rdNotification)

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
}
