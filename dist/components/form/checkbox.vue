
<template>
    <label class="rd-checkbox-wrapper">
        <div class="rd-checkbox">
            <span 
                class="rd-checkbox-inner"
                :class="{
                    'selected': checkbox.checked,
                    'disabled': checkbox.disabled
                }"
            >
                <i class="rd-checkbox-inner-icon ion-checkmark-round"></i>
                <input 
                    type="checkbox" 
                    :value="checkbox.checked"
                    class="rd-checkbox-input"
                    @change="changeAction"
                >
            </span>
            <span>{{checkbox.text}}</span>
        </div>
    </label>
</template>
<script>
export default {
    props: {
        checkbox: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeAction (e) {
            e.stopPropagation()
            if (!this.checkbox.disabled) {
                this.checkbox.checked = !this.checkbox.checked
            }
            if (this.checkbox.change) {
                this.checkbox.change()
            }
            this.$emit('change', this.checkbox, this)
        }
    }
}
</script>