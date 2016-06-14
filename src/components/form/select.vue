<template>
    <div class="radon-select-container" @click="showOption" :class="{ 'active': show }">
        <div class="radon-select-selected-value">{{selected.value}}</div>
        <span class="radon-select-arrow ion-chevron-down"></span>
        <div class="radon-select-options-container">
            <div class="radon-select-option" @click="setValue(option)" v-for="option in options" :class="{
                    'selected': option.selected,
                    'disabled': option.disabled
                    }">{{option.value}}</div>
        </div>
    </div>
</template>
<script>
import '../../sass/index.scss'
export default {
    props: {
        value: {
            type: Object,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            show: false
        }
    },
    computed: {
        selected () {
            let value = {
                selected: false,
                value: '',
                id: null
            }

            this.options.forEach(option => {
                if (option.selected) {
                    value = option
                }
            })
            this.value = value
            return value
        }
    },
    methods: {
        setValue (option) {
            if (option.disabled) return
            this.options.forEach(op => {
                op.selected = false
            })
            option.selected = true
        },
        showOption () {
            this.show = !this.show
        }
    }
}
</script>
