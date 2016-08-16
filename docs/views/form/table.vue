<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Table 表格
展示行列数据，点击空白处可编辑/保存。
        </textarea>
    </mark>
    <p>
        <rd-table 
            :options="TableData.options" 
            :columns="TableData.columns" 
            :actions="TableData.actions" 
            :data.sync="TableData.tableData"
        ></rd-table>
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
        // 内容是否可编辑 :Boolean
        editable: true
    },
    // 列描述数据对象
    columns: [{
        // 可通过index自定义列的排序
        index: 1,
        // 定义列的key值，应唯一且与数据key值匹配
        key: 'name',
        // 展示列名
        value: '姓名'
    }, {
        index: 1,
        key: 'name',
        value: '姓名'
    }, {
        index: 2,
        key: 'age',
        value: '年龄',
        sort: {
            state: false,
            func: (e, col) => {
                this.sortBy(col)
            }
        }
    }, {
        index: 3,
        key: 'wechat',
        value: '微信'
    }],
    // 行操作对象:Array
    actions: [{
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
        id: {
            // 值
            value: 1,
            // 值的类型（支持input标签type属性中的所有类型），默认为text
            type: 'number',
            // 此字段是否可编辑，默认为true（只有当前字段的editable与全局options中的editable均为true时才可编辑）
            editable: false
        },
        name: {
            value: '王尼玛',
            type: 'text',
            editable: true
        },
        age: {
            value: '26',
            type: 'number',
            editable: true
        },
        wechat: {
            value: 'wangnima',
            type: 'text',
            editable: true
        },

        // 添加后可启用当前列的状态标签，可选类型请参考Button文档
        state: {
            type: 'success',
            value: '批准'
        },

        // 开启选择时应该有checkbox属性
        checkbox: {
            disabled: false,
            checked: false,
            text: ''
        }
    }
    ...
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
                    select: true,
                    state: true,
                    editable: true
                },
                columns: [{
                    index: 0,
                    key: 'id',
                    value: 'ID',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 1,
                    key: 'name',
                    value: '姓名'
                }, {
                    index: 2,
                    key: 'age',
                    value: '年龄',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 3,
                    key: 'wechat',
                    value: '微信'
                }],
                actions: [{
                    type: 'button',
                    text: '删除',
                    func: (e, row) => {
                        console.log(row)
                        this.removeTableItem(row)
                    }
                }],
                tableData: [{
                    id: {
                        value: 1,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '王尼玛',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '26',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'wangnima',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'success',
                        value: '批准'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: {
                        value: 2,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '赵铁柱',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '26',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'Iron-column-zhao',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'info',
                        value: '待审'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: {
                        value: 3,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '张全蛋',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '27',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'Michael Jack',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'failed',
                        value: '拒绝'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }]
            }
        }
    },
    components: {
        rdTable,
        mark
    },
    methods: {
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row.name.value + '成功', '', 5000)
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
                    // select: true,
                    // state: true,
                    // editable: true
                },
                columns: [{
                    index: 0,
                    key: 'id',
                    value: 'ID',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 1,
                    key: 'name',
                    value: '姓名'
                }, {
                    index: 2,
                    key: 'age',
                    value: '年龄',
                    sort: {
                        state: false,
                        func: (e, col) => {
                            this.sortBy(col)
                        }
                    }
                }, {
                    index: 3,
                    key: 'wechat',
                    value: '微信'
                }],
                actions: [{
                    type: 'button',
                    text: '删除',
                    func: (e, row) => {
                        console.log(row)
                        this.removeTableItem(row)
                    }
                }],
                tableData: [{
                    id: {
                        value: 1,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '王尼玛',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '26',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'wangnima',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'success',
                        value: '批准'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: {
                        value: 2,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '赵铁柱',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '26',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'Iron-column-zhao',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'info',
                        value: '待审'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: {
                        value: 3,
                        type: 'number',
                        editable: false
                    },
                    name: {
                        value: '张全蛋',
                        type: 'text',
                        editable: true
                    },
                    age: {
                        value: '27',
                        type: 'number',
                        editable: true
                    },
                    wechat: {
                        value: 'Michael Jack',
                        type: 'text',
                        editable: true
                    },
                    state: {
                        type: 'failed',
                        value: '拒绝'
                    },
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }]
            }
        }
    },
    components: {
        rdTable,
        Mark
    },
    methods: {
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row.name.value + '成功', '', 3000)
        },
        sortBy (col) {
            if (col.key === 'age') {
                if (col.sort.state) {
                    this.TableData.tableData = this.TableData.tableData.sort((a, b) => {
                        return Math.floor(a.age) - Math.floor(b.age)
                    })
                    col.sort.state = false
                } else {
                    this.TableData.tableData = this.TableData.tableData.sort((a, b) => {
                        return Math.floor(b.age) - Math.floor(a.age)
                    })
                    col.sort.state = true
                }
            }
            if (col.key === 'id') {
                if (col.sort.state) {
                    this.TableData.tableData = this.TableData.tableData.sort((a, b) => {
                        return Math.floor(a.id) - Math.floor(b.id)
                    })
                    col.sort.state = false
                } else {
                    this.TableData.tableData = this.TableData.tableData.sort((a, b) => {
                        return Math.floor(b.id) - Math.floor(a.id)
                    })
                    col.sort.state = true
                }
            }
        }
    }
}
</script>