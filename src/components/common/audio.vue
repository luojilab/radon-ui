<style>
.rd-audio-player-container {
    display: inline-block;
}
.rd-audio-player-wrapper {
    width: 20rem;
    background: #fff;
    display: flex;
    height: 3rem;
    border-radius: .2rem;
    box-shadow: 0 0 .5rem #c1c1c1;  
}
.rd-audio-cover {
    position: relative;
    width: 3rem;
    flex-shrink: 0;
    background-size: cover;
    background-color: #CDDC39;
}
.rd-audio-contrl-wrapper {
    width: 100%;
    padding: 0 .5rem;
}
.rd-audio-play {
    width: 3rem;
    flex-shrink: 0;
}
.rd-audio-play-btn {
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    width: 2rem;
    height: 2rem;
    top: 50%;
    left: 50%;
    margin: -1rem 0 0 -1rem;
    border-radius: 50%;
    outline: none;
}
.rd-audio-play-btn-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    margin: -.5rem 0 0 -.4rem;
}
.rd-audio-play-btn-icon.pause {
    margin: -.5rem 0 0 -.5rem; 
}
.rd-audio-title {
    height: 2rem;
    font-size: .8rem;
    line-height: 1rem;
    padding: .7rem 0 0 0;
    box-sizing: border-box;
}
.rd-audio-slider {
    width: 100%;
    height: .75rem;
    background: #fff;
    padding: 0 .25rem;
    box-sizing: border-box;
    display: flex;
}
.rd-audio-slider-rail {
    position: relative;
    width: 100%;
    height: .15rem;
    margin: .35rem 0 0 0;
    background: #9E9E9E;
}
.rd-audio-slider-dot {
    position: absolute;
    height: .5rem;
    width: .5rem;
    background: #ffffff;
    top: 0;
    left: 0;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin: -.25rem 0 0 -.25rem;
}
.rd-audio-slider-time {
    font-size: .75rem;
    line-height: .75rem;
    flex-shrink: 0;
    margin-left: .5rem;
}
.rd-audio-player-wrapper.large {

}
</style>

<template>
    <div class="rd-audio-player-container">
        <div class="rd-audio-player-wrapper">
            <div class="rd-audio-cover" :style="{ 'background-image': audio.poster ? 'url(' + audio.poster + ')' : 'none' }" @click="touchCover">
                <button class="rd-audio-play-btn">
                    <svg class="rd-audio-play-btn-icon" v-show="!state.playing" viewBox="0 0 179 207" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
                        <title>Triangle 1</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="#ccc" fill-rule="evenodd">
                            <path d="M3,202 L3,5 L174,103.5 L3,202 Z" id="Triangle-1" stroke="#3e3e3e" stroke-width="5" fill="#3e3e3e"></path>
                        </g>
                    </svg>
                    <svg class="rd-audio-play-btn-icon pause" v-show="state.playing" viewBox="0 0 205 205" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
                        <title>Slice 1</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                            <rect id="pause-1" x="51" y="22" width="36" height="161"></rect>
                            <mask id="pause-mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="36" height="161" fill="white">
                                <use xlink:href="#pause-1"></use>
                            </mask>
                            <rect id="pause-3" x="120" y="22" width="36" height="161"></rect>
                            <mask id="pause-mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="36" height="161" fill="white">
                                <use xlink:href="#pause-3"></use>
                            </mask>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <use id="Rectangle-1" stroke="#979797" mask="url(#pause-mask-2)" stroke-width="2" fill="#3e3e3e" xlink:href="#pause-1"></use>
                            <use id="Rectangle-1" stroke="#979797" mask="url(#pause-mask-4)" stroke-width="2" fill="#3e3e3e" xlink:href="#pause-3"></use>
                        </g>
                    </svg>
                </button>
            </div>
            <div class="rd-audio-contrl-wrapper">
                <div class="rd-audio-title">
                    <span>{{audio.title}}</span>
                </div>
                <div class="rd-audio-slider">
                    <div class="rd-audio-slider-rail">
                        <div class="rd-audio-slider-dot" @mousedown="touchDot" :style="{ 'left': slider.progress + '%' }"></div>
                    </div>
                    <div class="rd-audio-slider-time">{{mu.state.lastTimeFormat}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueAudio from '../lib/audio.js'

    export default {
        props: {
            audio: Object
        },
        data () {
            return {
                mu: {
                    state: {
                        progress: 0,
                        lastTimeFormat: ''
                    }
                },
                state: {
                    moving: false,
                    liked: false,
                    playing: false
                },
                slider: {
                    progress: 0,
                    rail: {
                        $el: null,
                        x: 0,
                        width: 0
                    },
                    dot: {
                        $el: null,
                        width: 0,
                        x: 0
                    }
                }
            }
        },
        ready () {
            this.init()
            window.document.body.addEventListener('mousemove', this.movement, false)
            window.document.body.addEventListener('mouseup', this.leaveMove, false)
        },
        mounted () {
            this.init()
            window.document.body.addEventListener('mousemove', this.movement, false)
            window.document.body.addEventListener('mouseup', this.leaveMove, false)
        },
        beforeDestroy () {
            window.document.body.removeEventListener('mousemove', this.movement)
            window.document.body.removeEventListener('mouseup', this.leaveMove)
            if (this.mu.destroyed) {
                this.mu.destroyed()
            }
        },
        methods: {
            init () {
                this.mu = new VueAudio(this.audio.src, this.audio.options)
            },
            progress (count) {
                if (!this.state.moving) {
                    this.slider.progress = count
                }
            },
            touchCover () {
                if (this.state.playing) {
                    this.pause()
                } else {
                    this.play()
                }
            },
            touchSlider (e) {
                let time
                time = e.layerX / e.target.offsetWidth * this.mu.state.duration
                this.mu.setTime(time)
            },
            play () {
                this.state.playing = true
                this.mu.play()
            },
            pause () {
                this.state.playing = false
                this.mu.pause()
            },
            volplus () {
                this.mu.setVolume(this.mu.state.volume + 0.1)
            },
            volminus () {
                this.mu.setVolume(this.mu.state.volume - 0.1)
            },
            initSlider () {
                const $rail = this.$el.getElementsByClassName('rd-audio-slider-rail')[0]
                const $dot = this.$el.getElementsByClassName('rd-audio-slider-dot')[0]
                const railRect = $rail.getBoundingClientRect()
                const dotRect = $dot.getBoundingClientRect()
                this.slider.rail.$el = $rail
                this.slider.dot.$el = $dot
                this.slider.rail.x = railRect.left
                this.slider.rail.width = railRect.width
                this.slider.dot.x = dotRect.left
                this.slider.dot.width = dotRect.width
            },
            touchDot (e) {
                this.initSlider()
                this.state.moving = true
            },
            movement (e) {
                if (!this.state.moving) return
                const x = e.pageX - this.slider.dot.width * 0.5 - this.slider.rail.x
                let progress = (x / this.slider.rail.width) * 100
                if (progress > 0 && progress < 100) {
                    this.slider.progress = progress
                }
            },
            leaveMove (e) {
                if (this.state.moving) {
                    this.state.moving = false
                    let current = this.slider.progress * this.mu.state.duration / 100
                    this.mu.setTime(current)
                }
            }
        }
    }
</script>