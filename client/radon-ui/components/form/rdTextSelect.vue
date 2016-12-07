<style>
.rd-text-select-container {
    display: flex;
}
.rd-text-select-container .rd-textfield-input{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.rd-text-select-container .rd-select-container {
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: none;
    &:hover {
        margin-left: -1px;
    }
}
</style>

<template>
    <div class="rd-text-select-container">
        <rd-text :textfield="value"></rd-text>
        <rd-select :value="value.select"></rd-select>
    </div>
</template>

<script>
import rdSelect from './select.vue'
import rdText from './textfield.vue'

export default {
    data () {
        return {
            value: {
                value: '',
                select: {
                    value: {},
                    options: [{
                        selected: false,
                        disabled: false,
                        value: '￥',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '％',
                        id: 2
                    }, {
                        selected: false,
                        disabled: false,
                        value: '‰',
                        id: 3
                    }, {
                        selected: false,
                        disabled: false,
                        value: '‱',
                        id: 3
                    }]
                }
            }
        }
    },
    components: {
        rdSelect,
        rdText
    }
}
</script>