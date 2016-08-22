const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
        return '0' + val
    }
    return val + ''
}

const Cov = {
    on (el, type, func) {
        el.addEventListener(type, func)
    },
    off (el, type, func) {
        el.removeEventListener(type, func)
    }
}

class VueAudio {
    constructor (src, options = {}) {
        let preload = true
        if (options.preload !== undefined && options.preload === false) {
            preload = false
        }
        this.tmp = {
            src: src,
            options: options
        }
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
        }
        this.hook = {
            playState: [],
            loadState: []
        }
        if (preload) {
            this.init(src, options)
        }
    }

    init (src, options = {}) {
        if (!src) console.error('src must be required')
        this.state.startLoad = true
        if (this.state.tried === this.state.try) {
            this.state.failed = true
            return
        }
        this.$Audio = new window.Audio(src)
        Cov.on(this.$Audio, 'error', () => {
            this.state.tried++
            this.init(src, options)
        })
        if (options.autoplay) {
            this.play()
        }
        if (options.rate) {
            this.$Audio.playbackRate = options.rate
        }
        if (options.loop) {
            this.$Audio.loop = true
        }
        if (options.volume) {
            this.setVolume(options.volume)
        }
        this.loadState()
    }

    loadState () {
        if (this.$Audio.readyState >= 2) {
            Cov.on(this.$Audio, 'progress', this.updateLoadState.bind(this))
        } else {
            Cov.on(this.$Audio, 'loadeddata', () => {
                this.loadState()
            })
        }
    }

    updateLoadState (e) {
        if (!this.$Audio) return
        this.hook.loadState.forEach(func => {
            func(this.state)
        })
        this.state.duration = Math.round(this.$Audio.duration * 100) / 100
        this.state.loaded = Math.round(10000 * this.$Audio.buffered.end(0) / this.$Audio.duration) / 100
        this.state.durationTimerFormat = this.timeParse(this.state.duration)
    }

    updatePlayState (e) {
        this.state.currentTime = Math.round(this.$Audio.currentTime * 100) / 100
        this.state.duration = Math.round(this.$Audio.duration * 100) / 100
        this.state.progress = Math.round(10000 * this.state.currentTime / this.state.duration) / 100

        this.state.durationTimerFormat = this.timeParse(this.state.duration)
        this.state.currentTimeFormat = this.timeParse(this.state.currentTime)
        this.state.lastTimeFormat = this.timeParse(this.state.duration - this.state.currentTime)

        this.hook.playState.forEach(func => {
            func(this.state)
        })
    }

    updateHook (type, func) {
        if (!(type in this.hook)) console.error('updateHook: type should be playState or loadState')
        this.hook[type].push(func)
    }

    play () {
        if (this.state.startLoad) {
            if (!this.state.playing && this.$Audio.readyState >= 2) {
                this.$Audio.play()
                this.state.paused = false
                this.state.playing = true
                Cov.on(this.$Audio, 'timeupdate', this.updatePlayState.bind(this))
            } else {
                Cov.on(this.$Audio, 'loadeddata', () => {
                    this.play()
                })
            }
        } else {
            this.init(this.tmp.src, this.tmp.options)
            Cov.on(this.$Audio, 'loadeddata', () => {
                this.play()
            })
        }
    }

    destroyed () {
        if (!this.$Audio) return
        this.$Audio.pause()
        Cov.off(this.$Audio, 'timeupdate', this.updatePlayState)
        Cov.off(this.$Audio, 'progress', this.updateLoadState)
    }

    pause () {
        this.$Audio.pause()
        this.state.paused = true
        this.state.playing = false
        this.$Audio.removeEventListener('timeupdate', this.updatePlayState)
    }

    setVolume (number) {
        if (number > -0.01 && number <= 1) {
            this.state.volume = Math.round(number * 100) / 100
            this.$Audio.volume = this.state.volume
        }
    }

    setTime (time) {
        if (time < 0 && time > this.state.duration) {
            return false
        }
        this.$Audio.currentTime = time
    }

    timeParse (sec) {
        let min = 0
        min = Math.floor(sec / 60)
        sec = sec - min * 60
        return pad(min) + ':' + pad(sec)
    }

}

export default VueAudio
