<style>
.rd-table {
    width: 100%;
    max-width: 100%;
    text-align: left;
    border-radius: 6px;
    margin-bottom: 1rem;
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
                <td v-if="table.options.select" class="rd-table-check-col">
                    <radon-checkbox @click="selectAllAction" :checkbox="selectAll"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="col in table.columns" @click="touchCol($event, col)">{{col.value}}</td>
                <td v-if="table.options.state">
                    状态
                </td>
                <td v-if="table.actions">
                    <span>操作</span>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr class="rd-table-th" v-for="row in List" track-by="$index">
                <td v-if="row.checkbox" class="rd-table-check-col">
                    <radon-checkbox :checkbox="row.checkbox"></radon-checkbox>
                </td>
                <td class="rd-table-td" v-for="val in row._value" track-by="$index">{{val}}</td>
                <td class="rd-table-td" v-if="row.state">
                    <span :class="stateTagClass(row.state)" class="rd-table-state">{{row.state.value}}</span>
                </td>
                <td class="rd-table-td" v-if="table.actions">
                    <rd-button v-for="action in table.actions" size="small" @click="action.func($event, row)">{{action.text}}</rd-button>
                </td>
            </tr>
        </tbody>
    </table>
    <rd-pagination @change="paginationChanged" :total="pagination.total" :options="pagination"></rd-pagination>
</template>
<script>
import radonCheckbox from '../form/checkbox.vue'
import rdButton from '../basic/button.vue'
import rdPagination from '../navigation/pagination.vue'
const generateList = (columns, tableData) => {
    let cols = columns.sort((a, b) => {
        return a.index - b.index
    })
    let MAP = {}
    cols.forEach((col, index) => {
        MAP[col.key] = index + 1
    })
    let List = []
    let itemTmp = {
        _value: []
    }
    tableData.forEach(item => {
        itemTmp = {
            _value: []
        }
        Object.keys(item).forEach(key => {
            itemTmp[key] = item[key]
            if (MAP[key]) {
                itemTmp._value[MAP[key] - 1] = item[key]
            }
        })
        List.push(itemTmp)
    })
    return List
}
export default {
    props: {
        table: {
            type: Object
        }
    },
    data () {
        return {
            selectAll: {
                checked: false
            },
            pagination: {
                total: 0,
                pageIndex: 1,
                pageSize: this.table.options.pageSize || 20,
                remote: {
                    pageIndexName: 'pageIndex',
                    pageSizeName: 'pageSize',
                    offset: 0
                }
            }
        }
    },
    computed: {
        List () {
            const list = generateList(this.table.columns, this.table.tableData)
            const start = ((this.pagination.pageIndex - 1) * (this.table.options.pageSize || 20)) + 1
            const end = list.length > (this.pagination.pageIndex * this.table.options.pageSize) ? this.pagination.pageIndex * this.table.options.pageSize : list.length
            this.pagination.total = list.length
            return list.slice(start - 1, end)
        }
    },
    components: {
        radonCheckbox,
        rdButton,
        rdPagination
    },
    methods: {
        paginationChanged (pagination) {
            this.pagination.pageIndex = pagination.pageIndex
        },
        stateTagClass (state) {
            let classList = {}
            classList[state.type] = true
            return classList
        },
        selectAllAction (e) {
            this.table.tableData.forEach(row => {
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