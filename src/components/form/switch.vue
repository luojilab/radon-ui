<style lang="scss">
.rd-switch-container.small {
    height: 1rem;
    width: 2.5rem;
    .rd-switch-inner {
        height: .8rem;
        width: .8rem;
        top: .1rem;
        left: .2rem;
    }
    &.open .rd-switch-inner {
        left: 1.5rem;
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
    &.open .rd-switch-inner {
        left: 1.6rem;
    }
}
.rd-switch-inner {
    position: absolute;
    height: 1.3rem;
    width: 1.3rem;
    background: #fff;
    top: .1rem;
    left: .2rem;
    border-radius: 50%;
    transition: all .2s;
}
.rd-switch-container.open {
    background: #2db7f5;
}
</style>
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