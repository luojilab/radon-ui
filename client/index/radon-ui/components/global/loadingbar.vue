<style>
.rd-loading-bar {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 2px;
    width: 0%;
    transition: width 0.2s, opacity 0.6s;
    opacity: 1;
    background-color: #73ccec;
    z-index: 999999;
}
</style>
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
            return window.RADON_EVENT_BUS.RADON_LOADING_BAR
        }
    }
}
</script>
