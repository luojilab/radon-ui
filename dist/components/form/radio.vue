
<template>
    <label 
        class="rd-radio"
        :class="{
            'checked': radio.checked,
            'disabled': radio.disabled
        }"
        @click="checkAction(radio)"
    >
        <span class="rd-radio-inner"></span>
        <span class="rd-radio-value">{{radio.value}}</span>
    </label>
</template>
<script>
export default {
    props: {
        radio: Object
    },
    methods: {
        checkAction (radio) {
            if (!radio.disabled) {
                radio.checked = true
                this.$emit('change', radio)
            }
        }
    }
}
</script>