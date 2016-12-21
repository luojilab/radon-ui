<style src="radon-ui-css/global/loadingbar.css"></style>
<template>
    <div class="rd-loading-bar" :style="{
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
            return this.$RADON_EVENT_BUS.RADON_LOADING_BAR
        }
    }
}
</script>
