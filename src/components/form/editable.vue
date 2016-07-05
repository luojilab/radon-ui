<style>
.rd-editable-container {
    display: inline-block;
}
.rd-editable-inner {
    display: flex;
}
.rd-editable-inner .rd-btn {
    margin-left: .5rem;
}
</style>
<template>
    <div class="rd-editable-container">
        <span @click="startEdit" v-show="!state.edit"><rd-tooltip>点击编辑</rd-tooltip>{{value}}</span>
        <div class="rd-editable-inner" v-show="state.edit">
            <radon-text :textfield="editor"></radon-text>
            <radon-button type="primary" @click="compeleteEdit">确定</radon-button>
            <radon-button @click="toggleEdit">取消</radon-button>
        </div>
    </div>
</template>
<script>
import radonButton from '../basic/button.vue'
import radonText from './textfield.vue'
import rdTooltip from '../presentation/toolTip.vue'

export default {
    props: {
        value: String
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
            this.editor.value = this.value
            this.toggleEdit()
        },
        compeleteEdit () {
            this.value = this.editor.value
            this.toggleEdit()
        }
    }
}
</script>