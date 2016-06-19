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
</style>
<template>
    <table class="rd-table">
        <thead class="rd-table-thead">
            <tr class="rd-table-th">
                <td v-if="options.select">
                    <radon-checkbox @click="selectAllAction" :checkbox="selectAll"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="col in data.columns">{{col.value}}</td>
            </tr>
        </thead>
        <tbody>
            <tr class="rd-table-th" v-for="row in data.tableData" track-by="$index">
                <td v-if="row.SELECT_CHECKBOX && row.SELECT_CHECKBOX.show">
                    <radon-checkbox :checkbox="row.SELECT_CHECKBOX.checkbox"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="val in row.value" track-by="$index">{{val}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import radonCheckbox from '../form/checkbox.vue'

const tableData = [{
    value: [
        '王尼玛',
        '33',
        'wangnima'
    ]
}, {
    value: [
        '赵铁柱',
        '26',
        'Iron-column-zhao'
    ]
}, {
    value: [
        '张全蛋',
        '27',
        'Michael Jack'
    ]
}]

const generateTableData = (options, columns, source) => {
    let tableData = []
    let select = options.select || false
    tableData = source.map(row => {
        row['SELECT_CHECKBOX'] = {
            show: select,
            checkbox: {
                checked: false,
                text: ''
            }
        }
        return row
    })
    return tableData
}
export default {
    data () {
        return {
            options: {
                select: true
            },
            selectAll: {
                checked: false,
                text: ''
            },
            data: {
                columns: [{
                    key: 'col1',
                    value: '姓名'
                }, {
                    key: 'col2',
                    value: '年龄'
                }, {
                    key: 'col3',
                    value: '微信'
                }],
                tableData: []
            }
        }
    },
    components: {
        radonCheckbox
    },
    ready () {
        this.data.tableData = generateTableData(this.options, this.columns, tableData)
        console.log(generateTableData(this.options, this.columns, tableData))
    },
    methods: {
        selectAllAction (e) {
            this.data.tableData.forEach(row => {
                row.SELECT_CHECKBOX.checkbox.checked = !this.selectAll.checked
            })
        }
    }
}
</script>