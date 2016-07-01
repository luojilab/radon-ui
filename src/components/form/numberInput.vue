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
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0 .2rem;
}
</style>

<template>
    <div class="rd-number-container">
        <div class="rd-number-wrapper">
            <div class="rd-number-action" @click="minus">
                <i class="rd-number-icon ion-minus-circled"></i>
            </div>
            <div class="rd-number-input-wrapper">
                <input type="text" v-model="number.value" class="rd-number-input">
            </div>
             <div class="rd-number-action" @click="plus">
                <i class="rd-number-icon ion-plus-circled"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        number: Object
    },
    methods: {
        plus () {
            const step = this.number.step || 1
            const format = this.number.format || 0
            let count = this.number.value - 0 + step
            if (count >= this.number.min && count <= this.number.max) {
                this.number.value = count.toFixed(format)
            }
        },
        minus () {
            const step = this.number.step || 1
            const format = this.number.format || 0
            let count = this.number.value - step
            if (count >= this.number.min && count <= this.number.max) {
                this.number.value = count.toFixed(format)
            }
        }
    }
}
</script>