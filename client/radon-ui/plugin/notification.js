import {
    rdNotification
} from '../index'

export default (Vue, data, global) => {
    data.data['RADON_NOTIFICATION'] = []
    Vue.component('rd-notification', rdNotification)

    Vue.prototype.$Notification = {
        remove (item, duration) {
            setTimeout(() => {
                global.RADON_EVENT_BUS.RADON_NOTIFICATION.$remove(item)
            }, duration)
        },
        create (type, title, content, duration) {
            let item = {
                type: type,
                title: title,
                content: content
            }
            global.RADON_EVENT_BUS.RADON_NOTIFICATION.push(item)
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
