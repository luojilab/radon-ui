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
    &:hover {
        background: #f1f4f9;
    }
}
.rd-table-td {
    font-size: .8rem;
    text-align: left;
    padding: 1rem .5rem;
}
.rd-table-td .rd-btn {
    margin-right: .5rem;
}
.rd-table-check-col {
    padding-left: .5rem;
}
.rd-table-state {
    font-size: .8rem;
    padding: .2rem .5rem;
    background: #a5a5a5;
    color: #fff;
    &.success {
        background-color: #87d068;
    }
    &.info {
        background-color: #2db7f5;
    }
    &.warning {
        background-color: #fa0;
    }
    &.failed {
        background-color: #f50;
    }
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
                <td v-if="options.select" class="rd-table-check-col">
                    <radon-checkbox @click="selectAllAction" :checkbox="selectAll"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="col in columns" @click="touchCol($event, col)">{{col.value}}</td>
                <td v-if="options.state">
                    状态
                </td>
                <td v-if="actions">
                    <span>操作</span>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr class="rd-table-th" v-for="row in data" track-by="$index">
                <td v-if="row.checkbox" class="rd-table-check-col">
                    <radon-checkbox :checkbox="row.checkbox"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="field in row | isColumnData columns" track-by="$index" @click.self="toggleEditStatus(field)">
                    <span v-if="!field.editable">{{field.value}}</span>
                    <rd-edit-text v-if="field.editable" :value="field" @save="editSaveAction"></rd-edit-text>
                    <!-- <rd-input v-if="field.editing" :textfield="field" :type="field.type"></rd-input> -->
                </td>
                <td class="rd-table-td" v-if="row.state">
                    <span :class="stateTagClass(row.state)" class="rd-table-state">{{row.state.value}}</span>
                </td>
                <td class="rd-table-td" v-if="actions">
                    <rd-button v-for="action in actions" size="small" @click="action.func($event, row)">{{action.text}}</rd-button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import radonCheckbox from '../form/checkbox.vue'
import rdButton from '../basic/button.vue'
import rdInput from '../form/textfield.vue'
import rdEditText from '../form/editable.vue'

const sortColumn = (columns) => {
    return columns.sort((a, b) => {
        return a.index - b.index
    })
}

const getColumnList = (columns) => {
    let MAP = {}
    columns.forEach((col, index) => {
        MAP[col.key] = index + 1
    })

    return MAP
}

const generateList = (columns, tableData) => {
    let MAP = getColumnList(columns)

    let List = []
    tableData.forEach(item => {
        Object.keys(item).forEach(key => {
            if (MAP[key]) {
                item[key] = Object.assign({
                    value: '',
                    type: 'text',
                    editable: true,
                    editing: false
                }, item[key])
            }
        })
        List.push(item)
    })
    return List
}

export default {
    props: {
        options: {
            type: Object
        },
        columns: {
            type: Array
        },
        actions: {
            type: Array
        },
        data: {
            type: Array
        }
    },
    data () {
        return {
            selectAll: {
                checked: false
            },
            columnData: []
        }
    },
    ready () {
        this.columns = sortColumn(this.columns)
        this.data = generateList(this.columns, this.data)
    },
    components: {
        radonCheckbox,
        rdButton,
        rdInput,
        rdEditText
    },
    filters: {
        isColumnData (row, columns) {
            const MAP = getColumnList(columns)

            let result = {}
            Object.keys(row).forEach(key => {
                if (MAP[key]) {
                    result[key] = row[key]
                }
            })
            return result
        }
    },
    methods: {
        editSaveAction (field) {
            console.log('saved', field)
            // To do
            // save to parent's table data
        },
        toggleEditStatus (field) {
            if (this.options.editable && field.editable) {
                field.editing = !field.editing
            }
        },
        stateTagClass (state) {
            let classList = {}
            classList[state.type] = true
            return classList
        },
        selectAllAction (e) {
            this.data.forEach(row => {
                row.checkbox.checked = !this.selectAll.checked
            })
        },
        touchCol (e, col) {
            if (col.sort && col.sort.func) {
                col.sort.func(e, col)
            }
        }
    }
}
</script>