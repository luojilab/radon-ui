<style>
@import '../../css/index';
.rd-radio-group {
    line-height: 2rem;
}
.rd-radio-inner {
    position: relative;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-sizing: border-box;
    vertical-align: text-top;
}
.rd-radio-inner::after {
    content: '';
    position: absolute;
    display: inline-block;
    background: #57c5f7;
    border-radius: 50%;
    height: .5rem;
    width: .5rem;
    opacity: 1;
    top: 50%;
    left: 50%;
    margin-top: -.25rem;
    margin-left: -.25rem;
    border: none;
    opacity: 0;
    transition: opacity .2s;
}
.rd-radio.checked .rd-radio-inner::after{
    opacity: 1;
}
.rd-radio {
    margin-right: 1rem;
}
.rd-radio-value {
    margin-left: .25rem;
}
</style>
<template>
    <div class="rd-radio-group">
        <label 
            class="rd-radio" 
            v-for="radio in radios" 
            :class="{ 'checked': radio.checked }"
            @click="checkAction(radio)"
        >
            <span class="rd-radio-inner"></span>
            <span class="rd-radio-value">{{radio.value}}</span>
        </label>
    </div>
</template>
<script>
export default {
    props: {
        radios: Array
    },
    methods: {
        reset () {
            this.radios.map(radio => {
                radio.checked = false
            })
        },
        checkAction (radio) {
            this.reset()
            radio.checked = true
        }
    }
}
</script>