
<template>
    <div 
        class="rd-switch-container"
        :class="{
            'open': value.checked,
            'close': !value.checked,
            'small': value.size === 'small'
        }"
        @click="toggle"
    >
        <div class="rd-switch-inner"></div>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Object
        }
    },
    methods: {
        toggle () {
            this.value.checked = !this.value.checked
            this.$emit('change', this.value)
        }
    }
}
</script>