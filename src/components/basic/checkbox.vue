<style>
    .radon-checkbox-wrapper {
        display: inline-block;
        cursor: pointer;
        font-size: 1rem;
    }
    .radon-checkbox-input {
        opacity: 0;
    }
    .radon-checkbox-inner {
        position: relative;
        display: inline-block;
        height: 1rem;
        width: 1rem;
        background: #d4d4d4;
        border-radius: 4px;
    }
    .radon-checkbox-inner-icon {
        display: none;
        color: #fff;
        position: absolute;
        font-size: .5rem;
        top: .2rem;
        left: .2rem;
    }
    .radon-checkbox-inner.selected {
        background: #2db7f5;
    }
    .radon-checkbox-inner.selected .radon-checkbox-inner-icon{
        display: initial;
    }
</style>
<template>
    <label class="radon-checkbox-wrapper">
        <span class="radon-checkbox">
            <span 
                class="radon-checkbox-inner"
                :class="{ 'selected': checkbox.checked }"
            >
                <i class="radon-checkbox-inner-icon ion-checkmark-round"></i>
                <input 
                    type="checkbox" 
                    v-model="checkbox.checked" 
                    class="radon-checkbox-input"
                    @change="changeAction"
                >
            </span>
            <span>{{checkbox.text}}</span>
        </span>
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