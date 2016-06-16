<style>
    .rd-progress-bar {
        display: flex;
        padding: .5rem 0;
    }
    .rd-progress-outer {
        display: inline-block;
        background: #f3f3f3;
        width: 100%;
        height: 1rem;
        border-radius: .5rem;
    }
    .rd-progress-inner {
        height: 1rem;
        width: 20%;
        border-radius: .5rem;
        background-color: #2db7f5;
        transition: all .3s linear 0s;
    }
    .rd-progress-info {
        position: relative;
        margin-left: 1rem;
    }
    .rd-progress-text {
        transition: opacity .1s;
    }
    .rd-progress-state {
        position: absolute;
        font-size: 1.2rem;
        top: -.1rem;
        left: 0;
        transition: opacity .2s;
    }
    .rd-progress-state.ion-checkmark-circled {
        color: #87d068;
    }
    .rd-progress-state.ion-close-circled{
        color: #f50;
    }
    .rd-progress-bar-success .rd-progress-text,
    .rd-progress-bar-failed .rd-progress-text {
        opacity: 0;
    }
    .rd-progress-bar-success .rd-progress-inner {
        background-color: #87d068;
    }
    .rd-progress-bar-failed .rd-progress-inner {
        background-color: #f50;
    }
</style>
<template>
    <div 
        class="rd-progress-bar"
        :class="{
            'rd-progress-bar-success': options.state === 'success',
            'rd-progress-bar-failed': options.state === 'failed'
        }"
    >
        <div class="rd-progress-outer">
            <div 
                class="rd-progress-inner"
                :style="{ 'width': percent + '%' }"
            ></div>
        </div>
        <span class="rd-progress-info">
        <span class="rd-progress-text">{{percent}}%</span>
        <i class="rd-progress-state ion-checkmark-circled" v-show="options.state === 'success'"></i>
        <i class="rd-progress-state ion-close-circled" v-show="options.state === 'failed'"></i>
        </span>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            percent: 50,
            options: {
                color: '#2db7f5',
                size: 'common',
                state: 'loading'
            }
        }
    },
    ready () {
        var timer = setInterval(() => {
            if (this.percent < 100) {
                this.percent++
            } else {
                this.options.state = 'success'
                clearInterval(timer)
            }
        }, 50)
    }
}
</script>