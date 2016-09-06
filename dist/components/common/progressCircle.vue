
<template>
    <div
        class="rd-progress-circle-inner"
        :class="innerClass"
    >
        <svg class="rc-progress-circle" viewBox="0 0 100 100">
            <path class="rc-progress-circle-trail" d="M 50,50 m 0,-47
     a 47,47 0 1 1 0,94
     a 47,47 0 1 1 0,-94" stroke="#f3f3f3" stroke-width="6" fill-opacity="0"></path>
            <path class="rc-progress-circle-path" d="M 50,50 m 0,-47
     a 47,47 0 1 1 0,94
     a 47,47 0 1 1 0,-94" stroke-linecap="round" :stroke="color" class="path-style" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 295.31px, 295.31px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;" :style="{ 'stroke-dashoffset': circle+'px' }"></path>
        </svg>
        <span class="rd-progress-circle-info">
            <span class="rd-progress-circle-text">
                {{display}}
            </span>
            <i class="rd-progress-circle-state ion-checkmark-round" v-show="progress.options.state === 'success'"></i>
            <i class="rd-progress-circle-state ion-close-round" v-show="progress.options.state === 'failed'"></i>
        </span>
    </div>
</template>
<script>
const STATE_COLOR = {
    'success': '#87d068',
    'failed': '#f50'
}
export default {
    props: {
        progress: Object
    },
    computed: {
        color () {
            if (this.progress.options) {
                if (this.progress.options.state && STATE_COLOR[this.progress.options.state]) {
                    return STATE_COLOR[this.progress.options.state]
                }
                if (this.progress.options.color) {
                    return this.progress.options.color
                }
            }
            return '#2db7f5'
        },
        circle () {
            return 2.95 * (100 - this.progress.percent)
        },
        display () {
            if (this.progress.options.format) {
                return this.progress.options.format(this.progress.percent)
            }
            return this.progress.percent + '%'
        },
        innerClass () {
            let classList = []
            if (this.progress.options.state) {
                classList.push(this.progress.options.state)
            }
            if (this.progress.options.size) {
                classList.push(this.progress.options.size)
            }
            return classList
        }
    }
}
</script>
