<style lang="scss">
@import '../../sass/index';
.rd-tooltip-container {
    position: fixed;
    background: #656565;
    color: #fff;
    padding: .5rem;
    border-radius: 4px;
}
.expand-transition {
  transition: opacity .3s ease;
}
.expand-enter, .expand-leave {
  opacity: 0;
}
</style>
<template>
    <div 
        class="rd-tooltip-container" 
        @click="showAction" 
        :style="{
            'visibility': show,
            'top': position.y + 'px',
            'left': position.x + 'px'
        }"
        transition="expand"
    >
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title: '提示文字',
            show: 'hidden',
            position: {
                x: 0,
                y: 0
            }
        }
    },
    ready () {
        this.$el.parentNode.addEventListener('mouseenter', this.getParentSize, false)
        this.$el.parentNode.addEventListener('mouseleave', this.hideAction, false)
    },
    methods: {
        getParentSize () {
            window.a = this.$el
            const partentRect = this.$el.parentNode.getBoundingClientRect()
            console.log(partentRect)
            console.log(this.$el.offsetWidth)
            this.position.x = partentRect.left + partentRect.width * 0.5 - this.$el.clientWidth * 0.5
            this.position.y = partentRect.top - this.$el.clientHeight - 10
            this.showAction()
        },
        showAction (e) {
            this.show = 'visible'
        },
        hideAction () {
            this.show = 'hidden'
        }
    }
}
</script>