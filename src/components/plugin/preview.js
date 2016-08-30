import {
    rdPreview
} from '../index'

import preview from '../directive/preview'

export default (Vue, $root) => {
    Vue.set($root, 'RADON_PREVIEW', {
        show: false,
        current: {
            title: '',
            src: ''
        },
        list: []
    })
    Vue.component('rd-preview', rdPreview)
    preview(Vue, $root)
}
