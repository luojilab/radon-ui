<style>
.rd-table {
    width: 100%;
    max-width: 100%;
    text-align: left;
    border-radius: 6px;
}
.rd-table-thead {
}
.rd-table-th {
    color: rgba(0, 0, 0, 0.870588);
    height: 3rem;
    border-bottom: 1px solid #e9e9e9;
}
.rd-table-td {
    text-align: left;
    padding: 1rem .5rem;
}
.rd-table-td .rd-btn {
    margin-right: .5rem;
}
@media screen and (max-width: 768px) {
    .rd-table-td {
        padding: 0 .5rem;
        font-size: .8rem;
    }
}
</style>
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