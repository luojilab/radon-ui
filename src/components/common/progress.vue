<style>
@import '../../css/index';
.rd-progress-bar {
    position: relative;
    display: flex;
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
.rd-progress-bar-small .rd-progress-outer,
.rd-progress-bar-small .rd-progress-inner {
    height: .5rem;
}
.rd-progress-bar.rd-progress-bar-small {
}
.rd-progress-bar-small .rd-progress-state{
    font-size: .8rem;
    top: -0.15rem;
}
.rd-progress-bar-small .rd-progress-info {
    line-height: .5rem;
}
.rd-progress-bar-small .rd-progress-text {
    font-size: .8rem;
}
</style>
<template>
    <div 
        class="rd-progress-bar"
        :class="{
            'rd-progress-bar-success': progress.options.state === 'success',
            'rd-progress-bar-failed': progress.options.state === 'failed',
            'rd-progress-bar-small': progress.options.size === 'small'
        }"
    >
       <div class="rd-progress-outer">
            <div 
                class="rd-progress-inner"
                :style="{ 'width': progress.percent + '%' }"
            ></div>
        </div>
        <span class="rd-progress-info">
        <span class="rd-progress-text">{{progress.percent}}%</span>
        <i class="rd-progress-state ion-checkmark-circled" v-show="progress.options.state === 'success'"></i>
        <i class="rd-progress-state ion-close-circled" v-show="progress.options.state === 'failed'"></i>
        </span>
        
    </div>
</template>
<script>
export default {
    props: {
        progress: {
            type: Object,
            required: true
        }
    }
}
</script>