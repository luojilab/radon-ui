'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _index = require('./index');

var _preview = require('./directive/preview');

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : (0, _typeof3.default)(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.RadonUI = factory();
})(undefined, function () {
    'use strict';

    function install(Vue) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {
            Modal: true,
            Notification: true,
            Preview: true,
            LoadingBar: true
        } : arguments[1];

        Vue.use(require('vue-animated-list'));

        var $root = null;

        Vue.mixin({
            created: function created() {
                if (!$root) {
                    if (this === this.$root) {
                        RadonInit(this);
                    }
                }
            }
        });

        var RadonInit = function RadonInit(vm) {
            $root = vm;

            if (options.Modal) {
                Vue.set(vm, 'RADON_MODAL', {
                    show: false,
                    title: '',
                    content: '',
                    cancel: function cancel() {},
                    confirm: function confirm() {}
                });
                Vue.component('rd-modal', _index.rdModal);
            }

            if (options.Notification) {
                Vue.set(vm, 'RADON_NOTIFICATION', []);
                Vue.component('rd-notification', _index.rdNotification);
            }

            if (options.LoadingBar) {
                Vue.set(vm, 'RADON_LOADING_BAR', {
                    percent: 0,
                    options: {
                        canSuccess: true,
                        color: 'rgb(143, 255, 199)',
                        failedColor: 'red',
                        show: false,
                        height: '2px'
                    }
                });
                Vue.component('rd-loadingbar', _index.rdLoadingbar);
            }

            if (options.Preview) {
                Vue.set(vm, 'RADON_PREVIEW', {
                    show: false,
                    current: {
                        title: '在实际传输数据之前，需要完成几个步骤',
                        src: 'http://covteam.u.qiniudn.com/poster.png'
                    },
                    list: []
                });
                Vue.component('rd-preview', _index.rdPreview);
                (0, _preview2.default)(Vue, $root);
            }
        };

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

        Vue.prototype.$Progress = {
            timer: null,
            cut: 0,
            start: function start(time) {
                var _this = this;

                if (!time) time = 3000;
                $root.RADON_LOADING_BAR.percent = 0;
                $root.RADON_LOADING_BAR.options.show = true;
                $root.RADON_LOADING_BAR.options.canSuccess = true;
                this.cut = 10000 / Math.floor(time);
                this.timer = setInterval(function () {
                    _this.increase(_this.cut * Math.random());
                    if ($root.RADON_LOADING_BAR.percent > 95) {
                        _this.finish();
                    }
                }, 100);
            },
            set: function set(num) {
                $root.RADON_LOADING_BAR.options.show = true;
                $root.RADON_LOADING_BAR.options.canSuccess = true;
                $root.RADON_LOADING_BAR.percent = Math.floor(num);
            },
            get: function get() {
                return Math.floor($root.RADON_LOADING_BAR.percent);
            },
            increase: function increase(num) {
                $root.RADON_LOADING_BAR.percent = $root.RADON_LOADING_BAR.percent + Math.floor(num);
            },
            decrease: function decrease(num) {
                $root.RADON_LOADING_BAR.percent = $root.RADON_LOADING_BAR.percent - Math.floor(num);
            },
            hide: function hide() {
                clearInterval(this.timer);
                this.timer = null;
                setTimeout(function () {
                    $root.RADON_LOADING_BAR.options.show = false;
                    Vue.nextTick(function () {
                        setTimeout(function () {
                            $root.RADON_LOADING_BAR.percent = 0;
                        }, 100);
                    });
                }, 800);
            },
            finish: function finish() {
                $root.RADON_LOADING_BAR.percent = 100;
                this.hide();
            },
            failed: function failed() {
                $root.RADON_LOADING_BAR.options.canSuccess = false;
                $root.RADON_LOADING_BAR.percent = 100;
                this.hide();
            }
        };
    }
    return install;
});