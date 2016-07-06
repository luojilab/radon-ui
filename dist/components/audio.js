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
            volume: 0.5
        }
        this.hook = {
            progress: []
        }
        if (this.state.preload) {
            this.init(src, options)
        }
    }

    init (src, options = {}) {
        this.state.startLoad = true
        if (this.state.tried === this.state.try) {
            this.state.failed = true
            return
        }
        this.$Audio = new window.Audio(src)
        this.$Audio.addEventListener('error', () => {
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
        this.$Audio.addEventListener('progress', (e) => {
            this.state.loaded = Math.round(10000 * this.$Audio.buffered.end(0) / this.$Audio.duration) / 100
        })
    }

    updateState (e) {
        this.state.currentTime = Math.round(this.$Audio.currentTime * 100) / 100
        this.state.duration = Math.round(this.$Audio.duration * 100) / 100
        this.state.progress = Math.round(10000 * this.state.currentTime / this.state.duration) / 100

        this.hook.progress.forEach(func => {
            func(this.state.progress)
        })
    }

    progress (func) {
        this.hook.progress.push(func)
    }

    play () {
        if (this.state.startLoad) {
            if (!this.state.playing && this.$Audio.readyState >= 2) {
                this.$Audio.play()
                this.state.paused = false
                this.state.playing = true
                this.$Audio.addEventListener('timeupdate', this.updateState.bind(this))
            } else {
                this.$Audio.addEventListener('loadeddata', () => {
                    this.play()
                })
            }
        } else {
            this.init(this.tmp.src, this.tmp.options)
            this.$Audio.addEventListener('loadeddata', () => {
                this.play()
            })
        }
    }

    pause () {
        this.$Audio.pause()
        this.state.paused = true
        this.state.playing = false
        this.$Audio.removeEventListener('timeupdate', this.updateState)
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

}

export default VueAudio
