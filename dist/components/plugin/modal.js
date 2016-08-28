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
                cancel: cancel,
                confirm: confirm
            };
        },
        clear: function clear() {
            $root.RADON_MODAL = {
                show: false,
                title: '',
                content: '',
                cancel: function cancel() {},
                confirm: function confirm() {}
            };
        }
    };
};