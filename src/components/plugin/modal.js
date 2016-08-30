import {
    rdModal
} from '../index'

export default (Vue, $root) => {
    Vue.set($root, 'RADON_MODAL', {
        show: false,
        title: '',
        content: '',
        cancel: () => {},
        confirm: () => {}
    })

    Vue.component('rd-modal', rdModal)

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
