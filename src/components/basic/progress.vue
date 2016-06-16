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
    .rd-progress-text {
        margin-left: 1rem;
    }
</style>
<template>
    <div class="rd-progress-bar">
        <div class="rd-progress-outer">
            <div 
                class="rd-progress-inner"
                :style="{ 'width': percent + '%' }"
            ></div>
        </div>
        <span class="rd-progress-text">{{percent}}%</span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            percent: 20,
            options: {
                color: '#2db7f5',
                size: 'common'
            }
        }
    },
    ready () {
        setInterval(() => {
            if (this.percent < 100) {
                this.percent++
            } else {
                this.percent = 20
            }
        }, 500)
    }
}
</script>