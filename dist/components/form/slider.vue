
<template>
    <div class="rd-slider">
        <div
            class="rd-slider-handle"
            :style="{ 'transform': 'translate3D(' + handle.currentX + 'px, 0, 0)', 'transition' : handle.move ? 'transform 0s' : 'transform .1s' }"
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
    // TODO
    // 进行更高精度的判断
    return e.pageX
}

const calcPercent = function (x, width) {
    return (x / width * 100)
}

const _ = {
    on (type, handler) {
        document.body.addEventListener(type, handler, false)
    },
    off (type, handler) {
        document.body.removeEventListener(type, handler)
    }
}

export default {
    props: {
        slider: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            value: 0,
            step: 1,
            min: 0,
            max: 100,
            start: 0,
            end: 100,
            showTip: false,
            left: 0,
            width: 0,
            delta: 0,
            prevX: 0,
            handleWidth: 0,
            handle: {
                $el: null,
                move: false,
                delta: 0,
                currentX: 0,
                percent: 0
            }
        }
    },
    ready () {
        this.config()
        this.init()
        _.on('mousemove', this.moveAction)
        _.on('mouseup', this.endAction)
        _.on('touchmove', this.moveAction)
        _.on('touchend', this.endAction)
    },
    mounted () {
        this.config()
        this.init()
        _.on('mousemove', this.moveAction)
        _.on('mouseup', this.endAction)
        _.on('touchmove', this.moveAction)
        _.on('touchend', this.endAction)
    },
    beforeDestroy () {
        _.off('mousemove', this.moveAction)
        _.off('mouseup', this.endAction)
        _.off('touchmove', this.moveAction)
        _.off('touchend', this.endAction)
    },
    methods: {
        init () {
            this.handle.$el = this.$el.getElementsByClassName('rd-slider-handle')[0]

            this.handleWidth = this.handle.$el.getBoundingClientRect().width

            this.left = this.$el.getBoundingClientRect().left
            this.width = this.$el.getBoundingClientRect().width + this.handleWidth / 2

            this.fix()
        },
        config () {
            let keys = ['step', 'min', 'max', 'showTip', 'value', 'start', 'end']
            keys.map(key => {
                if (this.slider[key] !== undefined) {
                    this[key] = this.slider[key]
                }
            })
            if (this.slider.min === undefined) this.min = this.start
            if (this.slider.max === undefined) this.max = this.end

            if (this.value < this.min) this.value = this.min
            if (this.value > this.max) this.value = this.max

            this.value = this.correctValue(this.value)
            this.slider.value = this.value

            if (this.start > this.end) throw new Error('start should less than end')
            if (this.min < this.start) throw new Error('min should not smaller than start')
            if (this.max > this.end) throw new Error('max should not larger than end')
        },
        startAction (e) {
            this.init()

            this.delta = getMousePosition(e) - this.left - this.handle.currentX

            this.prevX = getMousePosition(e)

            this.handle.move = true
        },
        endAction (e) {
            this.fix()
            this.handle.delta = 0
            this.handle.move = false
        },
        moveAction (e) {
            if (!this.handle.move) return

            this.handle.delta = getMousePosition(e) - this.prevX
            this.prevX = getMousePosition(e)

            const newX = getMousePosition(e) - this.left - this.delta

            if (newX >= 0 && newX <= this.width) {
                let percent = calcPercent(newX, this.width)

                if (this.checkSize(percent)) {
                    this.moveTo(percent)

                    this.value = this.correctValue(this.calcValue(percent))
                    this.handle.percent = this.calcPercent(this.value)

                    this.slider.value = this.value
                    this.$emit('change', this.value)
                }
            }
        },
        setStep (percent) {
            let func = this.handle.moveToRight > 0 ? Math.ceil : Math.floor
            return func(percent / this.step) * this.step
        },
        checkSize (percent) {
            return percent <= this.max && percent >= this.min
        },
        correctValue (value) {
            let func = Math.round
            if (this.handle.delta > 0) func = Math.ceil
            if (this.handle.delta < 0) func = Math.round
            return func((value - this.min) / this.step) * this.step + this.min
        },
        calcPercent (value) {
            return Math.round((value - this.start) / (this.end - this.start) * 100)
        },
        calcValue (percent) {
            return Math.round(percent * 0.01 * (this.end - this.start) + this.start)
        },
        moveTo (percent) {
            this.handle.currentX = (this.width - this.handleWidth / 2) * percent * 0.01
        },
        fix () {
            this.value = this.correctValue(this.value)
            this.handle.percent = this.calcPercent(this.value)
            this.moveTo(this.handle.percent)
        }
    }
}
</script>
