<template>
    <div>
        <div>form</div>
        <randon-select :value.sync="select.value" :options="select.options"></randon-select>
        <randon-button>button</randon-button>
    </div>
</template>
<script>
import randonSelect from '../../src/components/form/select.vue'
import randonButton from '../../src/components/basic/button.vue'
export default {
    data () {
        return {
            select: {
                value: {},
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
        }
    },
    components: {
        randonSelect,
        randonButton
    }
}
</script>
