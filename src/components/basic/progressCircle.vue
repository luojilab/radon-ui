<style>
    .rd-progress-circle-inner {
        position: relative;
        width: 132px;
        height: 132px;
        font-size: 27.12px;
    }
    .rd-progress-circle-info {
        display: block;
        position: absolute;
        width: 100%;
        text-align: center;
        line-height: 1;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        margin: 0;
    }
</style>
<template>
    <div @click="add(progress)" class="rd-progress-circle-inner" style="">
        <svg class="rc-progress-circle" viewBox="0 0 100 100">
            <path class="rc-progress-circle-trail" d="M 50,50 m 0,-47
     a 47,47 0 1 1 0,94
     a 47,47 0 1 1 0,-94" stroke="#f3f3f3" stroke-width="6" fill-opacity="0"></path>
            <path class="rc-progress-circle-path" d="M 50,50 m 0,-47
     a 47,47 0 1 1 0,94
     a 47,47 0 1 1 0,-94" stroke-linecap="round" :stroke="color" class="path-style" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 295.31px, 295.31px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;" :style="{ 'stroke-dashoffset': circle+'px' }"></path>
        </svg>
        <span class="rd-progress-circle-info">{{progress.percent}}%</span>
    </div>
</template>
<script>
const STATE_COLOR = {
    'success': '#87d068',
    'failed': '#f50'
}
export default {
    data () {
        return {
            progress: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'small',
                    state: 'success'
                }
            }
        }
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
        }
    },
    methods: {
        add (progress) {
            progress.percent = 0
            progress.options.state = ''
            let timer = setInterval(() => {
                if (progress.percent < 100) {
                    progress.percent++
                } else {
                    if (Math.random() * 2 < 1) {
                        progress.options.state = 'failed'
                    } else {
                        progress.options.state = 'success'
                    }
                    clearInterval(timer)
                }
            }, 50)
        }
    }
}
</script>
