import {
    rdPreview
} from '../index'

import preview from '../directive/preview'

export default (Vue, $root) => {
    window.globalVm = new Vue({
        data: {
            RADON_PREVIEW: {
                show: false,
                current: {
                    title: '',
                    src: ''
                },
                list: []
            }
        }
    })

    Vue.component('rd-preview', rdPreview)
    preview(Vue, window.globalVm)
}
