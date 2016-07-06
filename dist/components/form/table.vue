
<template>
    <table class="rd-table">
        <thead class="rd-table-thead">
            <tr class="rd-table-th">
                <td v-if="table.options.select">
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
                <td v-if="row.checkbox">
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
</template>
<script>
import radonCheckbox from '../form/checkbox.vue'
import rdButton from '../basic/button.vue'

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
                checked: false,
                text: ''
            }
        }
    },
    computed: {
        List () {
            return generateList(this.table.columns, this.table.tableData)
        }
    },
    components: {
        radonCheckbox,
        rdButton
    },
    methods: {
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