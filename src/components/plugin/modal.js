import {
    rdModal
} from '../index'

export default (Vue, $root) => {
    Vue.set($root, 'RADON_MODAL', {
        show: false,
        title: '',
        content: '',
        rawContent: '',
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
                rawContent: '',
                cancel: cancel,
                confirm: confirm
            }
        },
        clear () {
            $root.RADON_MODAL = {
                show: false,
                title: '',
                content: '',
                rawContent: '',
                cancel: () => {},
                confirm: () => {}
            }
        },
        confirm (title, text, confirm, cancel) {
            $root.RADON_MODAL = {
                show: true,
                title: title,
                content: text,
                rawContent: '',
                cancel: cancel,
                confirm: confirm
            }
        },
        confirmWithHTML (title, rawHTML, confirm, cancel) {
            console.log(rawHTML)
            $root.RADON_MODAL = {
                show: true,
                title: title,
                content: '',
                rawContent: rawHTML,
                cancel: cancel,
                confirm: confirm
            }
        }
    }
}
