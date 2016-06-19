<style lang="scss">
.rd-slider {
    position: relative;
}
.rd-slider-mark {
    height: .4rem;
    width: 100%;
    background: #eee;
    border-radius: .2rem;
}
.rd-slider-handle {
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: -.8rem;
    left: 0;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    transition: left .1s, background-color .2s;
    z-index: 1;
    &::after {
        content: '';
        position: absolute;
        background: rgba(255, 255, 255, 0.92);
        height: .9rem;
        width: .9rem;
        top: 50%;
        left: 50%;
        margin: -.45rem;
        border-radius: 50%;
        cursor: pointer;
        border: .15rem solid #2db7f5;
        transition: height cubic-bezier(0.23, 1, 0.32, 1) 450ms, width cubic-bezier(0.23, 1, 0.32, 1) 450ms, margin 10ms;
    }
    &:hover {
       background-color: rgba(0, 0, 0, 0.16);
    }
}
.rd-slider-handle-tip {
    display: none;
    opcity: 0;
    height: 0;
    position: absolute;
    bottom: 1rem;
    left: -.6rem;
    width: 2rem;
    background-color: #5e6061;
    color: #fff;
    text-align: center;
    padding: .5rem;
    border-radius: .5rem;
    transition: all .2s;
    transform: translateX(-1rem);
}
.rd-slider-handle.move .rd-slider-handle-tip {
    display: block;
    opacity: 1;
    height: initial;
}
</style>
<template>
    <div class="rd-slider">
        <div 
            class="rd-slider-handle"
            :style="{ 'transform': 'translate3D(' + handle.currentX + 'px, 0, 0)' }"
            :class="{ 'move': handle.move }"
            @mousedown="touchAction"
        >
            <div class="rd-slider-handle-tip" v-if="showTip">{{handle.percent}}</div>
        </div>
        <div class="rd-slider-track"></div>
        <div class="rd-slider-mark"></div>
    </div>
</template>
<script>
const getMousePosition = function (e) {
    return e.pageX
}

const calcPercent = function (x, width) {
    return Math.floor(x / width * 100)
}

export default {
    props: {
        value: Number,
        step: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        showTip: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            startX: 0,
            width: 0,
            handleWidth: 0,
            handle: {
                $el: null,
                move: false,
                currentX: 600,
                percent: 20
            }
        }
    },
    ready () {
        this.init()
        this.handle.percent = this.value
        document.body.addEventListener('mousemove', this.moveAction, false)
        document.body.addEventListener('mouseup', this.mouseupAction, false)
    },
    beforeDestroy () {
        document.body.removeEventListener('mousemove', this.moveAction)
        document.body.removeEventListener('mouseup', this.mouseupAction)
    },
    methods: {
        init () {
            this.handle.$el = this.$el.getElementsByClassName('rd-slider-handle')[0]
            this.handleWidth = this.handle.$el.getBoundingClientRect().width
            this.startX = this.$el.getBoundingClientRect().left
            this.width = this.$el.getBoundingClientRect().width // - this.handleWidth
            console.log(this.startX, this.$el.getBoundingClientRect().left, this.handleWidth)
        },
        touchAction (e) {
            this.init()
            this.handle.move = true
        },
        mouseupAction (e) {
            this.handle.move = false
        },
        moveAction (e) {
            if (!this.handle.move) return
            const radius = this.handleWidth * 0.5
            const x = getMousePosition(e) - this.startX - radius

            if (x > -radius && x < this.startX + this.width) {
                let percent = calcPercent(x + radius, this.width)
                if (this.checkSize(percent)) {
                    percent = this.setStep(percent)
                    this.handle.percent = percent
                    this.value = percent
                    this.handle.currentX = x
                }
            }
        },
        setStep (percent) {
            return Math.ceil(percent / this.step) * this.step
        },
        checkSize (percent) {
            return percent <= this.max && percent >= this.min
        }
    }
}
</script>