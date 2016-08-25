
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