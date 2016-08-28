'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index');

exports.default = function (Vue, $root) {
    Vue.set($root, 'RADON_NOTIFICATION', []);
    Vue.component('rd-notification', _index.rdNotification);

    Vue.prototype.$Notification = {
        remove: function remove(item, duration) {
            setTimeout(function () {
                $root.RADON_NOTIFICATION.$remove(item);
            }, duration);
        },
        create: function create(type, title, content, duration) {
            var item = {
                type: type,
                title: title,
                content: content
            };
            $root.RADON_NOTIFICATION.push(item);
            if (duration) {
                this.remove(item, duration);
            }
        },
        success: function success(title, content, duration) {
            this.create('success', title, content, duration);
        },
        info: function info(title, content, duration) {
            this.create('info', title, content, duration);
        },
        warning: function warning(title, content, duration) {
            this.create('warning', title, content, duration);
        },
        failed: function failed(title, content, duration) {
            this.create('failed', title, content, duration);
        }
    };
};