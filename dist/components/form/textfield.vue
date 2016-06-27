
<template>
    <div 
        class="rd-textfield-wrapper"
        :class="{
        'loading': textState === 'loading',
        'warning': textState === 'warning',
        'failed': textState === 'failed',
        'info': textState === 'info',
        'success': textState === 'success'
     }"
    >
        <input 
            type="text" 
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
        input: Function,
        change: Function
    },
    computed: {
        textState () {
            if (this.textfield.state) {
                return this.textfield.state
            }
            return 'default'
        },
        textIcon () {
            let classList = {}
            classList[ICON_MAP[this.textState]] = true
            return classList
        }
    },
    methods: {
        changing () {
            if (this.change) {
                this.change(this.textfield)
            }
        },
        inputing () {
            if (this.input) {
                this.input(this.textfield)
            }
        }
    }
}
</script>