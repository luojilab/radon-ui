<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Table 表格

## 代码
```javascript
export default {
    template: '<rd-table :table="TableData"></rd-table>',
    data () {
        return {
            TableData: {
                options: {
                    select: true
                },
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
                actions: [{
                    type: 'button',
                    text: '编辑',
                    func: (e, row) => {
                        this.editTable(row)
                    }
                }, {
                    type: 'button',
                    text: '删除',
                    func: (e, row) => {
                        console.log(row)
                        this.removeTableItem(row)
                    }
                }],
                tableData: [{
                    id: 1,
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    },
                    value: [
                        '王尼玛',
                        '33',
                        'wangnima'
                    ]
                }, {
                    id: 2,
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    },
                    value: [
                        '赵铁柱',
                        '26',
                        'Iron-column-zhao'
                    ]
                }, {
                    id: 3,
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    },
                    value: [
                        '张全蛋',
                        '27',
                        'Michael Jack'
                    ]
                }]
            }
        }
    },
    components: {
        rdTable,
        mark
    },
    methods: {
        editTable (row) {
            this.$Notification.success('正在编辑' + row.value[0], '', 5000)
        },
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row.value[0] + '成功', '', 5000)
        }
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <rd-table :table="TableData"></rd-table>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    rdTable
} from '../../src/components/index'

export default {
    data () {
        return {
            TableData: {
                options: {
                    select: true
                },
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
                actions: [{
                    type: 'button',
                    text: '编辑',
                    func: (e, row) => {
                        this.editTable(row)
                    }
                }, {
                    type: 'button',
                    text: '删除',
                    func: (e, row) => {
                        console.log(row)
                        this.removeTableItem(row)
                    }
                }],
                tableData: [{
                    id: 1,
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    },
                    value: [
                        '王尼玛',
                        '33',
                        'wangnima'
                    ]
                }, {
                    id: 2,
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    },
                    value: [
                        '赵铁柱',
                        '26',
                        'Iron-column-zhao'
                    ]
                }, {
                    id: 3,
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    },
                    value: [
                        '张全蛋',
                        '27',
                        'Michael Jack'
                    ]
                }]
            }
        }
    },
    components: {
        rdTable,
        mark
    },
    methods: {
        editTable (row) {
            this.$Notification.success('正在编辑' + row.value[0], '', 5000)
        },
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row.value[0] + '成功', '', 5000)
        }
    }
}
</script>