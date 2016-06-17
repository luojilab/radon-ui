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
    position: relative;
    background: rgba(255, 255, 255, 0.92);
    height: 0.9rem;
    width: .9rem;
    position: absolute;
    top: -.25rem;
    left: 0;
    border-radius: 50%;
    cursor: pointer;
    border: .15rem solid #2db7f5;
    transition: left .1s;
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
}
.rd-slider-handle.move .rd-slider-handle-tip {
    display: block;
    opacity: 1;
    height: initial;
}
</style>
<template>
    <div class="rd-slider" @mousedown="init">
        <div 
            :style="{ 'left': handle.percent + '%' }"
            class="rd-slider-handle"
            :class="{ 'move': handle.move }"
            @mousedown="touchAction" 
            @mouseup="mouseupAction" 
            @mousemove="moveAction"
        >
            <div class="rd-slider-handle-tip">{{handle.percent}}</div>
        </div>
        <div class="rd-slider-track"></div>
        <div class="rd-slider-mark"></div>
    </div>
</template>
<script>
const pauseEvent = function (e) {
    e.stopPropagation()
    e.preventDefault()
}

const getMousePosition = function (e) {
    return e.pageX
}

const calcPercent = function (x, start, width) {
    return Math.floor((x - start) / width * 100)
}
export default {
    data () {
        return {
            step: 10,
            min: 10,
            max: 90,
            startX: 0,
            width: 0,
            handle: {
                move: false,
                currentX: 600,
                percent: 20
            }
        }
    },
    ready () {
        this.init()
        document.body.addEventListener('mousemove', this.moveAction, false)
        document.body.addEventListener('mouseup', this.mouseupAction, false)
    },
    beforeDestroy () {
        document.body.removeEventListener('mousemove', this.moveAction)
        document.body.removeEventListener('mouseup', this.mouseupAction)
    },
    methods: {
        init () {
            this.startX = this.$el.getBoundingClientRect().left
            this.width = this.$el.clientWidth
        },
        touchAction (e) {
            pauseEvent(e)
            this.handle.move = true
        },
        mouseupAction (e) {
            pauseEvent(e)
            this.handle.move = false
        },
        moveAction (e) {
            pauseEvent(e)
            getMousePosition(true, e)
            if (!this.handle.move) return
            console.log(e)
            const x = getMousePosition(e) - 7
            if (x > this.startX && x < this.startX + this.width) {
                this.handle.currentX = getMousePosition(e) - 7
                if (this.checkSize(calcPercent(this.handle.currentX, this.startX, this.width))) {
                    let percent = calcPercent(this.handle.currentX, this.startX, this.width)
                    percent = this.setStep(percent)
                    this.handle.percent = percent
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