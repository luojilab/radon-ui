'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var updateIndex = function updateIndex(list) {
    list.forEach(function (item, index) {
        item.index = index + 1;
    });
};

var preview = function preview(Vue, $root) {
    Vue.directive('preview', {
        bind: function bind() {
            var previewItem = {
                title: '',
                el: this.el,
                index: 0,
                src: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
            };
            $root.RADON_PREVIEW.list.push(previewItem);
            updateIndex($root.RADON_PREVIEW.list);
            this.el.addEventListener('click', function (e) {
                e.stopPropagation();
                $root.RADON_PREVIEW.show = true;
                $root.RADON_PREVIEW.current = previewItem;
            });
        },
        update: function update(newValue, oldValue) {
            var _this = this;

            var previewItem = $root.RADON_PREVIEW.list.find(function (item) {
                return item.el === _this.el;
            });
            if (!previewItem) return;
            previewItem.src = newValue;
        },
        unbind: function unbind() {
            var _this2 = this;

            if (this.el) {
                $root.RADON_PREVIEW.list.forEach(function (item, index) {
                    if (_this2.el === item.el) {
                        $root.RADON_PREVIEW.list.splice(index, 1);
                    }
                });
            }
            updateIndex($root.RADON_PREVIEW.list);
        }
    });
    return Vue;
};

exports.default = preview;