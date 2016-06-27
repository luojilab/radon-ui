
<template>
    <div 
        class="rd-switch-container"
        :class="{
            'open': checked,
            'close': !checked,
            'small': size === 'small'
        }"
        @click="toggle"
    >
        <div class="rd-switch-inner"></div>
    </div>
</template>
<script>
export default {
    props: {
        checked: Boolean,
        size: {
            type: String,
            default: 'common'
        }
    },
    methods: {
        toggle () {
            this.checked = !this.checked
        }
    }
}
</script>