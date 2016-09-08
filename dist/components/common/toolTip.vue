
<template>
    <div 
        class="rd-tooltip-container"
        :style="{
            'visibility': show,
            'top': position.y + 'px',
            'left': position.x + 'px'
        }"
        transition="expand"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    data () {
        return {
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
    mounted () {
        this.$el.parentNode.addEventListener('mouseenter', this.getParentSize, false)
        this.$el.parentNode.addEventListener('mouseleave', this.hideAction, false)
    },
    methods: {
        getParentSize () {
            const partentRect = this.$el.parentNode.getBoundingClientRect()
            this.position.x = partentRect.left + partentRect.width * 0.5 - this.$el.clientWidth * 0.5
            console.log(partentRect)
            if (partentRect.top < 50) {
                this.position.y = partentRect.top + partentRect.height + 10
            } else {
                this.position.y = partentRect.top - this.$el.clientHeight - 10
            }
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