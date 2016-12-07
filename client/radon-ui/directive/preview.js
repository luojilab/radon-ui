const updateIndex = (list) => {
    list.forEach((item, index) => {
        item.index = index + 1
    })
}

function getImage (src, previewItem) {
    return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.src = src
        img.onload = function () {
            previewItem['naturalHeight'] = img.naturalHeight
            previewItem['naturalWidth'] = img.naturalWidth
            resolve(img)
        }
        img.error = function (e) {
            reject(e)
        }
    })
}

const preview = (Vue) => {
    Vue.directive('preview', {
        bind: function (el, bind, vnode) {
            let previewItem = {
                title: '',
                el: el,
                index: 0,
                src: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
            }
            window.RADON_EVENT_BUS.RADON_PREVIEW.list.push(previewItem)
            updateIndex(window.RADON_EVENT_BUS.RADON_PREVIEW.list)
            el.addEventListener('click', (e) => {
                e.stopPropagation()
                window.RADON_EVENT_BUS.RADON_PREVIEW.show = true
                window.RADON_EVENT_BUS.RADON_PREVIEW.current = previewItem
            })
        },
        update: function (el, bind, vnode) {
            let previewItem = window.RADON_EVENT_BUS.RADON_PREVIEW.list.find(item => {
                return item.el === el
            })
            if (!previewItem) return
            previewItem.src = bind.value
            getImage(bind.value, previewItem)
        },
        unbind: function (el) {
            if (el) {
                window.RADON_EVENT_BUS.RADON_PREVIEW.list.forEach((item, index) => {
                    if (el === item.el) {
                        window.RADON_EVENT_BUS.RADON_PREVIEW.list.splice(index, 1)
                    }
                })
            }
            updateIndex(window.RADON_EVENT_BUS.RADON_PREVIEW.list)
        }
    })
    return Vue
}

export default preview
