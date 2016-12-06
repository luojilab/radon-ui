'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pad = function pad(val) {
    val = Math.floor(val);
    if (val < 10) {
        return '0' + val;
    }
    return val + '';
};

var Cov = {
    on: function on(el, type, func) {
        el.addEventListener(type, func);
    },
    off: function off(el, type, func) {
        el.removeEventListener(type, func);
    }
};

var VueAudio = function () {
    function VueAudio(src) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, VueAudio);

        var preload = true;
        if (options.preload !== undefined && options.preload === false) {
            preload = false;
        }
        this.tmp = {
            src: src,
            options: options
        };
        this.state = {
            preload: preload,
            startLoad: false,
            failed: false,
            try: 3,
            tried: 0,
            playing: false,
            paused: false,
            playbackRate: 1.0,
            progress: 0,
            currentTime: 0,
            duration: 0,
            volume: 0.5,
            loaded: '0',
            durationTimerFormat: '00:00',
            currentTimeFormat: '00:00',
            lastTimeFormat: '00:00'
        };
        this.hook = {
            playState: [],
            loadState: []
        };
        if (preload) {
            this.init(src, options);
        }
    }

    (0, _createClass3.default)(VueAudio, [{
        key: 'init',
        value: function init(src) {
            var _this = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (!src) console.error('src must be required');
            this.state.startLoad = true;
            if (this.state.tried === this.state.try) {
                this.state.failed = true;
                return;
            }
            this.$Audio = new window.Audio(src);
            Cov.on(this.$Audio, 'error', function () {
                _this.state.tried++;
                _this.init(src, options);
            });
            if (options.autoplay) {
                this.play();
            }
            if (options.rate) {
                this.$Audio.playbackRate = options.rate;
            }
            if (options.loop) {
                this.$Audio.loop = true;
            }
            if (options.volume) {
                this.setVolume(options.volume);
            }
            this.loadState();
        }
    }, {
        key: 'loadState',
        value: function loadState() {
            var _this2 = this;

            if (this.$Audio.readyState >= 2) {
                Cov.on(this.$Audio, 'progress', this.updateLoadState.bind(this));
            } else {
                Cov.on(this.$Audio, 'loadeddata', function () {
                    _this2.loadState();
                });
            }
        }
    }, {
        key: 'updateLoadState',
        value: function updateLoadState(e) {
            var _this3 = this;

            if (!this.$Audio) return;
            this.hook.loadState.forEach(function (func) {
                func(_this3.state);
            });
            this.state.duration = Math.round(this.$Audio.duration * 100) / 100;
            this.state.loaded = Math.round(10000 * this.$Audio.buffered.end(0) / this.$Audio.duration) / 100;
            this.state.durationTimerFormat = this.timeParse(this.state.duration);
        }
    }, {
        key: 'updatePlayState',
        value: function updatePlayState(e) {
            var _this4 = this;

            this.state.currentTime = Math.round(this.$Audio.currentTime * 100) / 100;
            this.state.duration = Math.round(this.$Audio.duration * 100) / 100;
            this.state.progress = Math.round(10000 * this.state.currentTime / this.state.duration) / 100;

            this.state.durationTimerFormat = this.timeParse(this.state.duration);
            this.state.currentTimeFormat = this.timeParse(this.state.currentTime);
            this.state.lastTimeFormat = this.timeParse(this.state.duration - this.state.currentTime);

            this.hook.playState.forEach(function (func) {
                func(_this4.state);
            });
        }
    }, {
        key: 'updateHook',
        value: function updateHook(type, func) {
            if (!(type in this.hook)) console.error('updateHook: type should be playState or loadState');
            this.hook[type].push(func);
        }
    }, {
        key: 'play',
        value: function play() {
            var _this5 = this;

            if (this.state.startLoad) {
                if (!this.state.playing && this.$Audio.readyState >= 2) {
                    this.$Audio.play();
                    this.state.paused = false;
                    this.state.playing = true;
                    Cov.on(this.$Audio, 'timeupdate', this.updatePlayState.bind(this));
                } else {
                    Cov.on(this.$Audio, 'loadeddata', function () {
                        _this5.play();
                    });
                }
            } else {
                this.init(this.tmp.src, this.tmp.options);
                Cov.on(this.$Audio, 'loadeddata', function () {
                    _this5.play();
                });
            }
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            if (!this.$Audio) return;
            this.$Audio.pause();
            Cov.off(this.$Audio, 'timeupdate', this.updatePlayState);
            Cov.off(this.$Audio, 'progress', this.updateLoadState);
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.$Audio.pause();
            this.state.paused = true;
            this.state.playing = false;
            this.$Audio.removeEventListener('timeupdate', this.updatePlayState);
        }
    }, {
        key: 'setVolume',
        value: function setVolume(number) {
            if (number > -0.01 && number <= 1) {
                this.state.volume = Math.round(number * 100) / 100;
                this.$Audio.volume = this.state.volume;
            }
        }
    }, {
        key: 'setTime',
        value: function setTime(time) {
            if (time < 0 && time > this.state.duration) {
                return false;
            }
            this.$Audio.currentTime = time;
        }
    }, {
        key: 'timeParse',
        value: function timeParse(sec) {
            var min = 0;
            min = Math.floor(sec / 60);
            sec = sec - min * 60;
            return pad(min) + ':' + pad(sec);
        }
    }]);
    return VueAudio;
}();

exports.default = VueAudio;