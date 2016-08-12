<style>
@import '../../css/index';
.rd-switch-container.small {
    height: 1rem;
    width: 2.5rem;
    .rd-switch-inner {
        height: .8rem;
        width: .8rem;
        top: 50%;
        margin-top: -.40rem;
        left: .2rem;
    }
    &.open .rd-switch-inner {
        transform: translate3d(1.3rem, 0, 0);
    }
}
.rd-switch-container {
    display: inline-block;
    position: relative;
    background: #e6e8e8;
    height: 1.5rem;
    width: 3rem;
    border-radius: .75rem;
    transition: color .2s;
    &.open {
        background: #2db7f5;
    }
    &.open .rd-switch-inner {
        transform: translate3d(1.3rem, 0, 0);
    }
}
.rd-switch-inner {
    position: absolute;
    height: 1.3rem;
    width: 1.3rem;
    background: #fff;
    top: 50%;
    margin-top: -.65rem;
    left: .2rem;
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
    transition: transform cubic-bezier(0.23, 1, 0.32, 1) .2s;
}
</style>
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