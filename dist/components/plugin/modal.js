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
        confirm: function confirm() {}
    });

    Vue.component('rd-modal', _index.rdModal);

    Vue.prototype.$Modal = {
        create: function create(title, text, confirm, cancel) {
            $root.RADON_MODAL = {
                show: true,
                title: title,
                content: text,
                rawContent: '',
                cancel: cancel,
                confirm: confirm
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
            $root.RADON_MODAL = {
                show: true,
                title: title,
                content: text,
                rawContent: '',
                cancel: cancel,
                confirm: _confirm
            };
        },
        confirmWithHTML: function confirmWithHTML(title, rawHTML, confirm, cancel) {
            console.log(rawHTML);
            $root.RADON_MODAL = {
                show: true,
                title: title,
                content: '',
                rawContent: rawHTML,
                cancel: cancel,
                confirm: confirm
            };
        }
    };
};