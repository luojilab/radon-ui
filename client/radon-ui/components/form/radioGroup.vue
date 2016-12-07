<template>
    <div class="rd-radio-group">
        <rd-radio :radio="radio" v-for="radio in radios" @change="checkAction"></rd-radio>
    </div>
</template>
<script>
import rdRadio from './radio.vue'
export default {
    props: {
        radios: Array
    },
    components: {
        rdRadio
    },
    methods: {
        reset (except) {
            this.radios.map(radio => {
                if (!radio.disabled && except !== radio) {
                    radio.checked = false
                }
            })
        },
        checkAction (radio) {
            this.reset(radio)
        }
    }
}
</script>