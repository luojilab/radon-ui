<style>
.rd-spin-content {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
}
.rd-loader-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -1.2rem;
    display: inline-block;
    text-indent: -9999em;
    border-top: .2rem solid rgb(243, 243, 243);
    border-right: .2rem solid rgb(243, 243, 243);
    border-bottom: .2rem solid rgb(243, 243, 243);
    border-left: .2rem solid #2db7f5;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
}
.rd-loader-circle,
.rd-loader-circle:after {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


</style>
<template>
    <div class="rd-spin-content">
        <div class="rd-loader-circle" :style="{ 'border-left': '.2rem solid ' + color }">Loading...</div>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            default () {
                return '.2rem solid #2db7f5'
            }
        }
    }
}
</script>