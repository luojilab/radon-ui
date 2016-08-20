<style>
@import '../../css/index';
.rd-number-container {
    display: inline-block;
}
.rd-number-wrapper {
    display: flex;
    width: 100%;
    height: 2rem;
}
.rd-number-action {
    flex-shrink: 0;
}
.rd-number-input {
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: .1rem .5rem;
    width: 100%;
    outline: none;
    box-sizing: border-box;
}
.rd-number-icon {
    font-size: 1rem;
    line-height: 2rem;
    margin: 0 .5rem;
}
</style>

<template>
    <div class="rd-number-container">
        <div class="rd-number-wrapper">
            <div class="rd-number-action" @click="minus">
                <i class="rd-number-icon ion-minus-round"></i>
            </div>
            <div class="rd-number-input-wrapper">
                <input type="text" v-model="number.value" class="rd-number-input">
            </div>
             <div class="rd-number-action" @click="plus">
                <i class="rd-number-icon ion-plus-round"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            min: this.number.min || 0,
            max: this.number.max || 100,
            step: this.number.step || 1,
            format: this.number.format || 0
        }
    },
    props: {
        number: Object
    },
    methods: {
        plus () {
            let count = this.number.value - 0 + this.step
            if (count >= this.min && count <= this.max) {
                this.number.value = count.toFixed(this.format)
            }
        },
        minus () {
            let count = this.number.value - this.step
            if (count >= this.min && count <= this.max) {
                this.number.value = count.toFixed(this.format)
            }
        }
    }
}
</script>