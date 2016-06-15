<style>
.radon-radio-group {
    line-height: 2rem;
}
.radon-radio-inner {
    position: relative;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border: 1px solid #ccc;
    border-radius: 50%;
}
.radon-radio-inner::after {
    content: ' ';
    display: inline-block;
    background: #57c5f7;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    position: absolute;
    top: .2rem;
    left: .2rem;
    opacity: 0;
    transition: opacity .2s;
}
.radon-radio.checked .radon-radio-inner::after{
    opacity: 1;
}
.radon-radio {
    margin-right: 1rem;
}
</style>
<template>
    <div class="radon-radio-group">
        <label 
            class="radon-radio" 
            v-for="radio in radios" 
            :class="{ 'checked': radio.checked }"
            @click="checkAction(radio)"
        >
            <span class="radon-radio-inner"></span>
            <span class="radon-radio-value">{{radio.value}}</span>
        </label>
    </div>
</template>
<script>
export default {
    data () {
        return {
            radios: [{
                checked: false,
                value: 'A'
            }, {
                checked: false,
                value: 'B'
            }, {
                checked: false,
                value: 'C'
            }, {
                checked: false,
                value: 'aa'
            }]
        }
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