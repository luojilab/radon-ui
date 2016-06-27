
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