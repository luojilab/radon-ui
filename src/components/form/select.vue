<template>
    <div class="radon-select-container" @click="showOption" :class="{ 'active': show }">
        <input class="radon-select-selected-value" :value="selected.value" doc/>
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
        type: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            show: false,
            options: [{
                selected: false,
                disabled: true,
                value: '2333',
                id: 1
            }, {
                selected: true,
                disabled: false,
                value: '13333333',
                id: 1
            }, {
                selected: false,
                disabled: false,
                value: 'ab33333aba',
                id: 1
            }]
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
