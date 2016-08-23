
<template>
    <div class="rd-progress" :style="{
      'width': loadingBar.percent+'%',
      'height': loadingBar.options.height,
      'background-color': loadingBar.options.canSuccess? loadingBar.options.color : loadingBar.options.failedColor,
      'opacity': loadingBar.options.show ? 1 : 0
    }">
    </div>
</template>
<script>
export default {
    computed: {
        loadingBar () {
            return this.$root.RADON_LOADING_BAR
        }
    },
    ababab: {
        percent: {
            type: Number,
            required: true
        },
        options: {
            type: Object,
            default () {
                return {
                    canSuccess: true,
                    color: 'rgb(143, 255, 199)',
                    failedColor: 'red',
                    show: false,
                    height: '2px'
                }
            }
        }
    }
}
</script>
