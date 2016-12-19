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
    position: relative;
    font-size: .8rem;
    text-align: left;
    padding: 1rem .5rem;
    text-align: center;
}
.rd-table-td.sort-icon {
    padding-right: 1.5rem;
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
.rd-table-sort-icon {
    position: absolute;
    right: .5rem;
    &.active {
        transform: rotate(180deg);
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
                    <rd-checkbox :checkbox="selectAll"></rd-checkbox>
                </td>
                <td 
                    class="rd-table-td" 
                    :class="{ 'sort-icon': col.sort }"
                    v-for="col in table.columns" 
                    @click="touchCol($event, col)"
                >
                    {{col.value}}
                    <span 
                        v-if="col.sort" 
                        class="rd-table-sort-icon ion-ios-arrow-down"
                        :class="{ 'active': col.sort.state }"
                    ></span>
                </td>
                <td class="rd-table-td" v-if="table.options.state">
                    {{ table.options.state.text ? table.options.state.text: '状态'}}
                </td>
                <td class="rd-table-td" v-if="table.actions">
                    {{ table.options.action && table.options.action.text ? table.options.action.text: '操作'}}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr class="rd-table-th" v-for="row in List" track-by="$index">
                <td v-if="row.checkbox" class="rd-table-check-col">
                    <rd-checkbox :checkbox="row.checkbox"></rd-checkbox>
                </td>
                <td class="rd-table-td" v-for="val in row._value" track-by="$index">
                    <div v-if="val && typeof val === 'object'">
                        <img v-if="val.type === 'image' " :src="val.src" :class="val.class">
                        <div v-if="val.type === 'raw' " :class="val.class" v-html="val.value"></div>
                        <div v-if="val.type === 'withRoute' " :class="val.class" v-link="val.route">{{val.value}}</div>
                    </div>
                    <div v-else>{{val}}</div>
                </td>
                <td class="rd-table-td" v-if="row.state">
                    <span :class="stateTagClass(row.state)" class="rd-table-state">{{row.state.value}}</span>
                </td>
                <td class="rd-table-td" v-if="table.actions || row.__actions">
                    <rd-button 
                        v-for="action in table.actions" 
                        :size="action.size || 'small'" 
                        :type="action.type"
                        :icon="action.icon"
                        :loading="action.loading"
                        :disabled="action.disabled"
                        @click="action.func($event, row)"
                    >{{action.text}}</rd-button>
                     <rd-button 
                        v-for="action in row.__actions" 
                        :size="action.size || 'small'" 
                        :disabled="action.disabled"
                        :type="action.type"
                        :icon="action.icon"
                        :loading="action.loading"
                        @click="action.func($event, row)"
                    >{{action.text}}</rd-button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import rdCheckbox from '../form/checkbox.vue'
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
                checked: false
            }
        }
    },
    watch: {
        'selectAll.checked' (val) {
            this.selectAllAction(val)
        }
    },
    computed: {
        List () {
            return generateList(this.table.columns, this.table.tableData)
        }
    },
    components: {
        rdCheckbox,
        rdButton
    },
    methods: {
        resetSelected () {
            this.selectAll.checked = false
        },
        stateTagClass (state) {
            let classList = {}
            classList[state.type] = true
            return classList
        },
        selectAllAction (val) {
            this.table.tableData.forEach(row => {
                row.checkbox.checked = val
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