import {
    rdPreview
} from '../index'

import preview from '../directive/preview'

export default (Vue, $EventBus) => {
    Vue.set($EventBus, 'RADON_PREVIEW', {
        show: false,
        current: {
            title: '',
            src: ''
        },
        list: []
    })

    Vue.component('rd-preview', rdPreview)
    preview(Vue, $EventBus)
}
