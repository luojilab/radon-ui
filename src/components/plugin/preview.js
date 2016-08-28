import {
    rdPreview
} from '../index'

import preview from '../directive/preview'

export default (Vue, $root) => {
    Vue.set($root, 'RADON_PREVIEW', {
        show: false,
        current: {
            title: '在实际传输数据之前，需要完成几个步骤',
            src: 'http://covteam.u.qiniudn.com/poster.png'
        },
        list: []
    })
    Vue.component('rd-preview', rdPreview)
    preview(Vue, $root)
}
