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
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    top: .5rem;
    &:hover {
        border: 1px solid #2db7f5;
    }
}
.rd-checkbox-inner-icon {
    position: absolute;
    color: #fff;
    font-size: .8rem;
    left: 50%;
    top: 50%;
    width: .8rem;
    height: .8rem;
    margin-top: -.3rem;
    margin-left: -.4rem;
    line-height: .8rem;
    opacity: 0;
    text-align: center;
    transition: opacity .2s;
}
.rd-checkbox-inner.selected {
    background: #2db7f5;
    border: 1px solid #2db7f5;
    &:hover {
        opacity: 0.8;
    }
}
.rd-checkbox-inner.selected .rd-checkbox-inner-icon{
    opacity: 1;
}
.rd-checkbox-inner.disabled {
    background: #eaeaea;
}
</style>
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