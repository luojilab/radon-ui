<style lang="scss">
@import '../../sass/index';
.radon-checkbox-wrapper {
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    line-height: 2rem;
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
    top: .5rem;
}
.radon-checkbox-inner-icon {
    color: #fff;
    position: absolute;
    font-size: .5rem;
    left: .2rem;
    top: 0;
    line-height: 1rem;
    opacity: 0;
    transition: opacity .2s;
}
.radon-checkbox-inner.selected {
    background: #2db7f5;
}
.radon-checkbox-inner.selected .radon-checkbox-inner-icon{
    opacity: 1;
}
</style>
<template>
    <label class="radon-checkbox-wrapper">
        <div class="radon-checkbox">
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