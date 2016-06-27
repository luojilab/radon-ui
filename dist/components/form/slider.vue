
<template>
    <div class="rd-slider">
        <div 
            class="rd-slider-handle"
            :style="{ 'transform': 'translate3D(' + handle.currentX + 'px, 0, 0)' }"
            :class="{ 'move': handle.move }"
            @mousedown="startAction"
            @touchstart="startAction"
        >
            <div class="rd-slider-handle-tip" v-if="showTip">{{handle.percent}}</div>
        </div>
        <div class="rd-slider-track"></div>
        <div class="rd-slider-mark"></div>
    </div>
</template>
<script>
const getMousePosition = function (e) {
    if (e.type === 'touchmove') {
        return e.touches[0].pageX
    }
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
                currentX: 0,
                percent: 0
            }
        }
    },
    ready () {
        this.init()
        document.body.addEventListener('mousemove', this.moveAction, false)
        document.body.addEventListener('mouseup', this.endAction, false)
        document.body.addEventListener('touchmove', this.moveAction, false)
        document.body.addEventListener('touchend', this.endAction, false)
    },
    beforeDestroy () {
        document.body.removeEventListener('mousemove', this.moveAction)
        document.body.removeEventListener('mouseup', this.endAction)
        document.body.removeEventListener('touchmove', this.moveAction)
        document.body.removeEventListener('touchend', this.endAction)
    },
    methods: {
        init () {
            this.handle.$el = this.$el.getElementsByClassName('rd-slider-handle')[0]
            this.handleWidth = this.handle.$el.getBoundingClientRect().width
            this.startX = this.$el.getBoundingClientRect().left
            this.width = this.$el.getBoundingClientRect().width
            this.handle.currentX = this.value * this.width * 0.01
        },
        startAction (e) {
            this.init()
            this.handle.move = true
        },
        endAction (e) {
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