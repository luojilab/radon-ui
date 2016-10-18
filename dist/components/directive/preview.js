'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateIndex = function updateIndex(list) {
    list.forEach(function (item, index) {
        item.index = index + 1;
    });
};

function getImage(src, previewItem) {
    return new _promise2.default(function (resolve, reject) {
        var img = new window.Image();
        img.src = src;
        img.onload = function () {
            previewItem['naturalHeight'] = img.naturalHeight;
            previewItem['naturalWidth'] = img.naturalWidth;
            resolve(img);
        };
        img.error = function (e) {
            reject(e);
        };
    });
}

var preview = function preview(Vue, $eventBus) {
    Vue.directive('preview', {
        bind: function bind() {
            var previewItem = {
                title: '',
                el: this.el,
                index: 0,
                src: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
            };
            $eventBus.RADON_PREVIEW.list.push(previewItem);
            updateIndex($eventBus.RADON_PREVIEW.list);
            this.el.addEventListener('click', function (e) {
                e.stopPropagation();
                $eventBus.RADON_PREVIEW.show = true;
                $eventBus.RADON_PREVIEW.current = previewItem;
            });
        },
        update: function update(newValue, oldValue) {
            var _this = this;

            var previewItem = $eventBus.RADON_PREVIEW.list.find(function (item) {
                return item.el === _this.el;
            });
            if (!previewItem) return;
            previewItem.src = newValue;
            getImage(newValue, previewItem);
        },
        unbind: function unbind() {
            var _this2 = this;

            if (this.el) {
                $eventBus.RADON_PREVIEW.list.forEach(function (item, index) {
                    if (_this2.el === item.el) {
                        $eventBus.RADON_PREVIEW.list.splice(index, 1);
                    }
                });
            }
            updateIndex($eventBus.RADON_PREVIEW.list);
        }
    });
    return Vue;
};

exports.default = preview;