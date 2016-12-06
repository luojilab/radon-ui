<style src="./assets/_ionicicon.css"></style>
<style src="./assets/base.css"></style>
<style>
.view {
  text-align: center;
  padding-top: 1rem;
}

.content {
  display: inline-block;
  width: 960px;
  min-height: 100vh;
  background-color: #fff;
  padding: 1rem;
}
@media all and (max-width: 768px) {
    .content {
        width: 100%;
        padding: .5rem;
        box-sizing: border-box;
    }
}
</style>
<template>
  <div id="app">
    <rd-button>2333</rd-button>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
import { rdButton } from 'radon-ui'
export default {
  components: {
    rdButton
  }
}
</script>
