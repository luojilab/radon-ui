<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Table 表格
展示行列数据。
        </textarea>
    </mark>
    <p>
        <rd-table :table="TableData"></rd-table>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API
```
<rd-table :table="TableData"></rd-table>
```
```
TableData: {
    // 基础设置 
    options: {
        // 是否展示选择 :Boolean
        select: true
    },
    // 列描述数据对象
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
    // 行操作对象:Array
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
    // 展示数据 :Array
    tableData: [{
        // 行列对象属性
        xx: 'xx',
        id: 1,

        // 开启选择时应该有该属性
        checkbox: {
            disabled: false,
            checked: false,
            text: ''
        },

        // 表格顺序展示值
        value: [
            '王尼玛',
            '33',
            'wangnima'
        ]
    }]
}
```
        </textarea>
    </mark>
    <mark>
        <textarea class="ex-mark-text">


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

        </textarea>
    </mark>
        
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdTable
} from '../../../src/components/index'

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
        Mark
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