'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index');

exports.default = function (Vue, $root) {
    Vue.set($root, 'RADON_LOADING_BAR', {
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

    Vue.prototype.$Loading = {
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
};