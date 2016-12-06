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

const preview = (Vue, $eventBus) => {
    Vue.directive('preview', {
        bind: function () {
            let previewItem = {
                title: '',
                el: this.el,
                index: 0,
                src: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
            }
            $eventBus.RADON_PREVIEW.list.push(previewItem)
            updateIndex($eventBus.RADON_PREVIEW.list)
            this.el.addEventListener('click', (e) => {
                e.stopPropagation()
                $eventBus.RADON_PREVIEW.show = true
                $eventBus.RADON_PREVIEW.current = previewItem
            })
        },
        update: function (newValue, oldValue) {
            let previewItem = $eventBus.RADON_PREVIEW.list.find(item => {
                return item.el === this.el
            })
            if (!previewItem) return
            previewItem.src = newValue
            getImage(newValue, previewItem)
        },
        unbind: function () {
            if (this.el) {
                $eventBus.RADON_PREVIEW.list.forEach((item, index) => {
                    if (this.el === item.el) {
                        $eventBus.RADON_PREVIEW.list.splice(index, 1)
                    }
                })
            }
            updateIndex($eventBus.RADON_PREVIEW.list)
        }
    })
    return Vue
}

export default preview
