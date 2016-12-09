import rdPreview from '../components/global/preview.vue'

import preview from '../directive/preview'

export default (Vue, vm) => {
    Vue.component('rd-preview', rdPreview)
    preview(Vue, vm)
}
