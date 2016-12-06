import {
    rdModal
} from '../index'

export default (Vue, data) => {
    const vm = window.RADON_EVENT_BUS

    data['data']['RADON_MODAL'] = {
        show: false,
        title: '',
        content: '',
        rawContent: '',
        cancel: () => {},
        confirm: () => {},
        large: false,
        cancelButton: {
            show: true,
            type: '',
            text: '取消'
        },
        confirmButton: {
            show: true,
            type: 'primary',
            text: '确定'
        }
    }

    Vue.component('rd-modal', rdModal)

    Vue.prototype.$Modal = {
        create (title, text, confirm, cancel, rawHTML, { cancelButton, confirmButton, large }) {
            vm.RADON_MODAL = {
                show: true,
                title: title,
                content: text,
                rawContent: rawHTML,
                cancel: cancel,
                confirm: confirm,
                large: large || false,
                cancelButton: cancelButton || {
                    show: true,
                    type: '',
                    text: '取消'
                },
                confirmButton: confirmButton || {
                    show: true,
                    type: 'primary',
                    text: '确定'
                }
            }
        },
        clear () {
            vm.RADON_MODAL = {
                show: false,
                title: '',
                content: '',
                rawContent: '',
                cancel: () => {},
                confirm: () => {}
            }
        },
        confirm (title, text, confirm, cancel, options = {}) {
            this.create(title, text, confirm, cancel, '', options)
        },
        confirmWithHTML (title, rawHTML, confirm, cancel, options = {}) {
            this.create(title, '', confirm, cancel, rawHTML, options)
        }
    }
}
