
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