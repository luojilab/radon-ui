'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index');

exports.default = function (Vue, $root) {
    Vue.set($root, 'RADON_MODAL', {
        show: false,
        title: '',
        content: '',
        rawContent: '',
        cancel: function cancel() {},
        confirm: function confirm() {},
        large: false,
        cancelButton: {
            show: true,
            type: '',
            text: '取消'
        },
        confirmButton: {
            show: true,
            type: 'primary',
            text: '确定'
        }
    });

    Vue.component('rd-modal', _index.rdModal);

    Vue.prototype.$Modal = {
        create: function create(title, text, confirm, cancel, rawHTML, _ref) {
            var cancelButton = _ref.cancelButton,
                confirmButton = _ref.confirmButton,
                large = _ref.large;

            $root.RADON_MODAL = {
                show: true,
                title: title,
                content: text,
                rawContent: rawHTML,
                cancel: cancel,
                confirm: confirm,
                large: large || false,
                cancelButton: cancelButton || {
                    show: true,
                    type: '',
                    text: '取消'
                },
                confirmButton: confirmButton || {
                    show: true,
                    type: 'primary',
                    text: '确定'
                }
            };
        },
        clear: function clear() {
            $root.RADON_MODAL = {
                show: false,
                title: '',
                content: '',
                rawContent: '',
                cancel: function cancel() {},
                confirm: function confirm() {}
            };
        },
        confirm: function confirm(title, text, _confirm, cancel) {
            var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

            this.create(title, text, _confirm, cancel, '', options);
        },
        confirmWithHTML: function confirmWithHTML(title, rawHTML, confirm, cancel) {
            var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

            this.create(title, '', confirm, cancel, rawHTML, options);
        }
    };
};