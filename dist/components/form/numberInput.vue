

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