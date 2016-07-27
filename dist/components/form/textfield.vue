
<template>
    <div 
        class="rd-textfield-wrapper"
        :class="stateClass"
    >
        <input 
            :type="type" 
            class="rd-textfield-input" 
            v-model="textfield.value" 
            :placeholder="textfield.placeHolder"
            @change="changing"
            @input="inputing"
        >
        <span class="rd-textfield-tip" v-if="textfield.tip">{{textfield.tip}}</span>
        <i class="rd-textfield-icon" :class="textIcon"></i>
    </div>
</template>
<script>
import { ICON_MAP } from '../utils'

export default {
    props: {
        textfield: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            default () {
                return 'text'
            }
        },
        sync: Function
    },
    computed: {
        textState () {
            if (this.textfield.state) {
                return this.textfield.state
            }
            return 'default'
        },
        textIcon () {
            if (!ICON_MAP[this.textState]) return []

            let classList = []
            classList.push(ICON_MAP[this.textState])

            return classList
        },
        stateClass () {
            if (!this.textState) return []
            return [this.textState]
        }
    },
    methods: {
        changing (e) {
            this.$emit('changing', this.textfield.value, this)
        },
        inputing (e) {
            this.$emit('inputing', this.textfield.value, this)
            if (!this.sync) return
            this.sync(this.textfield)
        }
    }
}
</script>