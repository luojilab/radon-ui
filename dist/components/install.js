'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _modal = require('./plugin/modal');

var _modal2 = _interopRequireDefault(_modal);

var _loadingBar = require('./plugin/loading-bar');

var _loadingBar2 = _interopRequireDefault(_loadingBar);

var _notification = require('./plugin/notification');

var _notification2 = _interopRequireDefault(_notification);

var _preview = require('./plugin/preview');

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : (0, _typeof3.default)(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.RadonUI = factory();
})(undefined, function () {
    'use strict';

    function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            Modal: true,
            Notification: true,
            Preview: true,
            LoadingBar: true
        };

        var RADON_EVENT_BUS = new Vue({});
        window.RADON_EVENT_BUS = RADON_EVENT_BUS;
        Vue.use(require('vue-animated-list'));

        var RadonInit = function RadonInit(vm) {
            if (options.Modal) {
                (0, _modal2.default)(Vue, vm);
            }

            if (options.Notification) {
                (0, _notification2.default)(Vue, vm);
            }

            if (options.LoadingBar) {
                (0, _loadingBar2.default)(Vue, vm);
            }

            if (options.Preview) {
                (0, _preview2.default)(Vue, vm);
            }
        };

        RadonInit(RADON_EVENT_BUS);
    }
    return install;
});