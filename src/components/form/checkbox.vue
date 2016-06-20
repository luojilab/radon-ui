<style>
@import '../../css/index';
.rd-checkbox-wrapper {
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    line-height: 2rem;
}
.rd-checkbox-input {
    opacity: 0;
}
.rd-checkbox-inner {
    position: relative;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    background: #d4d4d4;
    border-radius: 4px;
    top: .5rem;
}
.rd-checkbox-inner-icon {
    color: #fff;
    position: absolute;
    font-size: .5rem;
    left: .2rem;
    top: 0;
    line-height: 1rem;
    opacity: 0;
    transition: opacity .2s;
}
.rd-checkbox-inner.selected {
    background: #2db7f5;
}
.rd-checkbox-inner.selected .rd-checkbox-inner-icon{
    opacity: 1;
}
</style>
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