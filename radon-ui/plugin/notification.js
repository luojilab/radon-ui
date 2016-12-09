import rdNotification from '../components/global/notification.vue'

export default (Vue, vm) => {
    Vue.component('rd-notification', rdNotification)

    Vue.prototype.$Notification = {
        remove (item, duration) {
            setTimeout(() => {
                vm.RADON_NOTIFICATION.$remove(item)
            }, duration)
        },
        create (type, title, content, duration) {
            let item = {
                type: type,
                title: title,
                content: content
            }
            vm.RADON_NOTIFICATION.push(item)
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
