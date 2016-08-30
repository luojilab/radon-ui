const updateIndex = (list) => {
    list.forEach((item, index) => {
        item.index = index + 1
    })
}

const preview = (Vue, $root) => {
    Vue.directive('preview', {
        bind: function () {
            let previewItem = {
                title: '',
                el: this.el,
                index: 0,
                src: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
            }
            $root.RADON_PREVIEW.list.push(previewItem)
            updateIndex($root.RADON_PREVIEW.list)
            this.el.addEventListener('click', (e) => {
                e.stopPropagation()
                $root.RADON_PREVIEW.show = true
                $root.RADON_PREVIEW.current = previewItem
            })
        },
        update: function (newValue, oldValue) {
            let previewItem = $root.RADON_PREVIEW.list.find(item => {
                return item.el === this.el
            })
            if (!previewItem) return
            previewItem.src = newValue
        },
        unbind: function () {
            if (this.el) {
                $root.RADON_PREVIEW.list.forEach((item, index) => {
                    if (this.el === item.el) {
                        $root.RADON_PREVIEW.list.splice(index, 1)
                    }
                })
            }
            updateIndex($root.RADON_PREVIEW.list)
        }
    })
    return Vue
}

export default preview
