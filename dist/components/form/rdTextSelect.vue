

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