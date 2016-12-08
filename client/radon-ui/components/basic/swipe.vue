<style>
.rd-swipe {
    height: 400px;
    width: 600px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.rd-swipe-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
    box-sizing: content-box;
}
.rd-swipe-item {
    width: 600px;
    flex-shrink: 0;
    background-image: url(http://covteam.u.qiniudn.com/test14.jpg?imageView2/1/w/400/h/400);
    height: 100%;
    background-size: cover;
}
</style>
<template>
    <div class="rd-swipe">
        <div class="rd-swipe-wrapper" :style="wrapperStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import CovTouch from '../../lib/cov-touch'
import { _ } from '../../utils'
export default {
    props: {
        swipe: {
            type: Object,
            default () {
                return {
                    autoplay: 3000
                }
            }
        }
    },
    data () {
        return {
            $wrapper: null,
            $touch: null,
            timer: null,
            swiper: {
                swiping: false,
                rect: {
                    width: 0,
                    height: 0
                },
                count: 0,
                index: 0,
                options: {}
            },
            position: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    },
    computed: {
        wrapperStyle () {
            if (this.swiper.swiping) {
                return {
                    transform: `translate3d(-${this.position.x}px, ${this.position.y}px, ${this.position.z}px)`,
                    '-webkit-transform': `translate3d(-${this.position.x}px, ${this.position.y}px, ${this.position.z}px)`
                }
            } else {
                return {
                    transform: `translate3d(-${this.position.x}px, ${this.position.y}px, ${this.position.z}px)`,
                    '-webkit-transform': `translate3d(-${this.position.x}px, ${this.position.y}px, ${this.position.z}px)`,
                    transition: 'all .3s',
                    '-webkit-transition': 'all .3s',
                }
            }
            
        }
    },
    mounted () {
        _.on(window, 'resize', this.init())
    },
    beforeDestroy () {
        if (this.$touch) {
            this.$touch.destroy()
        }
    },
    methods: {
        init ()  {
            this.$wrapper = this.$el.getElementsByClassName('rd-swipe-wrapper')[0]
            this.swiper.count = this.$el.getElementsByClassName('rd-swipe-item').length
            this.swiper.rect = this.$el.getBoundingClientRect()
            this.initSwipe()
            if (this.swipe.autoplay) {
                this.autoPlay(this.swipe.autoplay)
            }
        },
        initSwipe () {
            if (this.$touch) {
                this.$touch.destroy()
            }
            this.$touch = new CovTouch({el: this.$el })

            this.$touch.listen('swipe-left', null, () => {
                this.swiper.swiping = false
                this.next()
            })
            this.$touch.listen('swipe-right', null, () => {
                this.swiper.swiping = false
                this.pre()
            })
            let movediff = 0

            this.$touch.listen('swiping', null, (start, end) => {
                this.swiper.swiping = true
                let move = start.x - end.x
                this.position.x += (move - movediff)
                movediff = move
            })

            this.$touch.listen('swiped', null, (start, end) => {
                movediff = 0
            })
        },
        autoPlay (delay) {
            this.stopAutoPlay()
            this.timer = setInterval(this.play, delay)
        },
        stopAutoPlay () {
            if (this.timer) {
                clearInterval(this.timer)
                this.timer = null
            }
        },
        play () {
            if (this.swiper.index === (this.swiper.count - 1)) {
                this.swiper.index = -1
            }
            this.next()
        },
        next () {
            if (this.swiper.index < this.swiper.count - 1) {
                this.swiper.index++
            }
            this.position.x = (this.swiper.rect.width * this.swiper.index)
            this.checkOut()
        },
        pre () {
            if (this.swiper.index > 0) {
                this.swiper.index--
            }
            this.position.x = (this.swiper.rect.width * this.swiper.index)
            this.checkOut()
        },
        turnTo (index) {
            this.swiper.index = index
            this.next()
        },
        checkOut () {
            if (this.position.x > (this.swiper.rect.width * this.swiper.count)) {
                this.position.x = (this.swiper.rect.width * this.swiper.count)
            }
            if (this.position.x < 0) {
                this.position.x = 0
            }
        }
    }
}
</script>