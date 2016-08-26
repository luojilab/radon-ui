'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function throttle(callback, limit) {
    var wait = false;
    return function () {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    };
}

var pad = function pad(val) {
    val = Math.floor(val);
    if (val < 10) {
        return '0' + val;
    }
    return val + '';
};

var ICON_MAP = {
    'success': 'ion-checkmark-circled',
    'failed': 'ion-close-circled',
    'warning': 'ion-alert-circled',
    'info': 'ion-information-circled',
    'loading': 'ion-load-a'
};

var catIn = function catIn(target, parent) {
    var path = [];
    var parentNode = target;
    while (parentNode && parentNode !== document.body) {
        path.push(parentNode);
        parentNode = parentNode.parentNode;
    }
    return path.indexOf(parent) !== -1;
};

exports.ICON_MAP = ICON_MAP;
exports.throttle = throttle;
exports.pad = pad;
exports.catIn = catIn;