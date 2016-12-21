<style src="radon-ui-css/basic/swipe.css"></style>
<template>
    <div class="rd-swipe">
        <div class="rd-swipe-wrapper" :style="wrapperStyle">
            <slot></slot>
        </div>
        <div class="rd-swipe-pagination" v-if="options.pagination">
            <div class="rd-swipe-pagination-item" :class="{ 'active': item.active }" v-for="(item, index) in pagination" @click="turnTo(index)"></div>
        </div>
    </div>
</template>
<script>
import CovTouch from '../../lib/cov-touch'

const _ = {
    on (el, type, handler) {
        el.addEventListener(type, handler, false)
    },
    off (el, type, handler) {
        el.addEventListener(type, handler, false)
    }
}

export default {
    props: {
        swipe: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            $wrapper: null,
            $touch: null,
            timer: null,
            pagination: [],
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
            },
            options: {
                activeIndex: 0,
                autoplay: 3000,
                pagination: true
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
                    '-webkit-transition': 'all .3s'
                }
            }
        }
    },
    mounted () {
        _.on(this.$el, 'resize', this.init())
    },
    beforeDestroy () {
        if (this.$touch) {
            this.$touch.destroy()
        }
    },
    methods: {
        init () {
            this.options = Object.assign(this.options, this.swipe)
            this.$wrapper = this.$el.getElementsByClassName('rd-swipe-wrapper')[0]
            this.swiper.count = this.$el.getElementsByClassName('rd-swipe-item').length
            this.swiper.rect = this.$el.getBoundingClientRect()

            if (this.options.pagination) {
                this.pagination = Array.from({
                    length: this.swiper.count
                }).map((item, index) => {
                    return {
                        index: index,
                        active: index === 0
                    }
                })
            }

            this.initSwipe()
            if (this.swipe.autoplay) {
                this.startAutoPlay(this.swipe.autoplay)
            }
        },
        initSwipe () {
            if (this.$touch) {
                this.$touch.destroy()
            }
            this.$touch = new CovTouch({
                el: this.$el
            })

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
                this.swiper.swiping = false
            })
        },
        startAutoPlay (delay) {
            this.stopAutoPlay()
            this.timer = setInterval(this.play, delay || this.options.autoplay)
        },
        stopAutoPlay () {
            if (this.timer) {
                window.clearInterval(this.timer)
                window.clearTimeout(this.timer)
                this.timer = null
            }
        },
        play () {
            if (this.swiper.index === (this.swiper.count - 1)) {
                this.swiper.index = -1
            }
            if (this.swiper.swiping) return
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
            index = Math.floor(index)
            if (index < -1 || index > this.swiper.count) return console.error('invaild index: ', index)
            this.stopAutoPlay()
            this.swiper.index = index
            this.position.x = (this.swiper.rect.width * index)
            this.checkOut()
            this.timer = setTimeout(() => {
                this.startAutoPlay()
            }, this.swipe.autoplay * 2)
        },
        setPaginationActive (index) {
            this.pagination.forEach(item => item.active = false)
            this.pagination[index].active = true
        },
        checkOut () {
            this.swipe.activeIndex = this.swiper.index
            if (this.options.pagination) {
                this.setPaginationActive(this.swiper.index)
            }
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
