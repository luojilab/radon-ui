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
    background: rgba(255, 255, 255, 0.92);
    height: 0.9rem;
    width: .9rem;
    position: absolute;
    top: -.25rem;
    left: 0;
    border-radius: 50%;
    cursor: pointer;
    border: .15rem solid #2db7f5;
}
</style>
<template>
    <div class="rd-slider" @mousedown="init">
        <div 
            :style="{ 'left': percent + '%' }"
            class="rd-slider-handle"
            @mousedown="touchAction" 
            @mouseup="mouseupAction" 
            @mousemove="moveAction"
        ></div>
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

export default {
    data () {
        return {
            startX: 400,
            width: 400,
            handle: {
                move: false,
                currentX: 600,
                percent: 20
            }
        }
    },
    computed: {
        percent () {
            return (this.handle.currentX - this.startX) / this.width * 100
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
            // console.log(e)
        },
        mouseupAction (e) {
            pauseEvent(e)
            this.handle.move = false
            // console.log(e)
        },
        moveAction (e) {
            pauseEvent(e)
            getMousePosition(true, e)
            if (!this.handle.move) return
            console.log(e)
            const x = getMousePosition(e) - 7
            if (x > this.startX && x < this.startX + this.width) {
                this.handle.currentX = getMousePosition(e) - 7
            }
        }
    }
}
</script>