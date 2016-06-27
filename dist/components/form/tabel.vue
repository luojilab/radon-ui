
<template>
    <table class="rd-table">
        <thead class="rd-table-thead">
            <tr class="rd-table-th">
                <td v-if="table.options.select">
                    <radon-checkbox @click="selectAllAction" :checkbox="selectAll"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="col in table.columns">{{col.value}}</td>
                <td v-if="table.actions">
                    <span>操作</span>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr class="rd-table-th" v-for="row in table.tableData" track-by="$index">
                <td v-if="row.checkbox">
                    <radon-checkbox :checkbox="row.checkbox"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="val in row.value" track-by="$index">{{val}}</td>
                <td class="rd-table-td" v-if="table.actions">
                    <rd-button v-for="action in table.actions" size="small" @click="action.func($event, row)">{{action.text}}</rd-button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import radonCheckbox from '../form/checkbox.vue'
import rdButton from '../basic/button.vue'

export default {
    props: {
        table: {
            type: Object
        }
    },
    data () {
        return {
            selectAll: {
                checked: false,
                text: ''
            }
        }
    },
    components: {
        radonCheckbox,
        rdButton
    },
    methods: {
        selectAllAction (e) {
            this.table.tableData.forEach(row => {
                row.checkbox.checked = !this.selectAll.checked
            })
        }
    }
}
</script>