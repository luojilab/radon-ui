
<template>
    <label class="rd-checkbox-wrapper">
        <div class="rd-checkbox">
            <span 
                class="rd-checkbox-inner"
                :class="{ 'selected': checkbox.checked }"
            >
                <i class="rd-checkbox-inner-icon ion-checkmark-round"></i>
                <input 
                    type="checkbox" 
                    v-model="checkbox.checked" 
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
        changeAction () {
            if (this.checkbox.change) {
                this.checkbox.change()
            }
        }
    }
}
</script>