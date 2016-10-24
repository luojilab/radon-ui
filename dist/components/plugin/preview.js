'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index');

var _preview = require('../directive/preview');

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue, $EventBus) {
    Vue.set($EventBus, 'RADON_PREVIEW', {
        show: false,
        current: {
            title: '',
            src: ''
        },
        list: []
    });

    Vue.component('rd-preview', _index.rdPreview);
    (0, _preview2.default)(Vue, $EventBus);
};