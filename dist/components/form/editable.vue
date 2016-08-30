
<template>
    <div class="rd-editable-container" :class="{ 'editing': state.edit }">
        <div class="rd-editable-value" @click="startEdit" v-show="!state.edit">
            <span><rd-tooltip>点击编辑</rd-tooltip>{{value.value}}</span>
            <span v-if="tip" class="rd-editable-edit">编辑</span>
        </div>
        <div class="rd-editable-inner" v-show="state.edit">
            <radon-text :textfield="editor"></radon-text>
            <radon-button type="primary" @click="compeleteEdit" icon="ion-checkmark-round"></radon-button>
            <radon-button @click="toggleEdit" icon="ion-close-round"></radon-button>
        </div>
    </div>
</template>
<script>
import radonButton from '../basic/button.vue'
import radonText from './textfield.vue'
import rdTooltip from '../common/toolTip.vue'

export default {
    props: {
        value: {
            type: Object
        }
    },
    data () {
        return {
            state: {
                edit: false
            },
            editor: {
                value: ''
            }
        }
    },
    components: {
        radonButton,
        radonText,
        rdTooltip
    },
    methods: {
        toggleEdit () {
            this.state.edit = !this.state.edit
        },
        startEdit () {
            this.editor.value = this.value.value
            this.toggleEdit()
        },
        compeleteEdit () {
            this.value.value = this.editor.value
            this.toggleEdit()
            this.$emit('save', this.value.value)
        }
    }
}
</script>