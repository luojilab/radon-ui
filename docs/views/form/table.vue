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
        index: 1,
        key: 'name',
        value: '姓名'
    }, {
        index: 2,
        key: 'age',
        value: '年龄'
    }, {
        index: 3,
        key: 'wechat',
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
        id: 1,
        name: '王尼玛',
        age: '33',
        wechat: 'wangnima',

        // 开启选择时应该有checkbox属性
        checkbox: {
            disabled: false,
            checked: false,
            text: ''
        }
    }, {
        id: 2,
        name: '赵铁柱',
        age: '26',
        wechat: 'Iron-column-zhao',
        checkbox: {
            disabled: false,
            checked: false,
            text: ''
        }
    }, {
        id: 3,
        name: '张全蛋',
        age: '27',
        wechat: 'Michael Jack',
        checkbox: {
            disabled: false,
            checked: false,
            text: ''
        }
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
                    index: 1,
                    key: 'name',
                    value: '姓名'
                }, {
                    index: 2,
                    key: 'age',
                    value: '年龄'
                }, {
                    index: 3,
                    key: 'wechat',
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
                    name: '王尼玛',
                    age: '33',
                    wechat: 'wangnima',
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: 2,
                    name: '赵铁柱',
                    age: '26',
                    wechat: 'Iron-column-zhao',
                    checkbox: {
                        disabled: false,
                        checked: false,
                        text: ''
                    }
                }, {
                    id: 3,
                    name: '张全蛋',
                    age: '27',
                    wechat: 'Michael Jack',
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
        editTable (row) {
            this.$Notification.success('正在编辑' + row._value[0], '', 5000)
        },
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row._value[0] + '成功', '', 5000)
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
                    select: true,
                    state: true
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
                    name: '王尼玛',
                    age: '33',
                    wechat: 'wangnima',
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
                    id: 2,
                    name: '赵铁柱',
                    age: '26',
                    wechat: 'Iron-column-zhao',
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
                    id: 3,
                    name: '张全蛋',
                    age: '27',
                    wechat: 'Michael Jack',
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
    ready () {
        this.loop()
    },
    methods: {
        loop () {
            setInterval(() => {
                this.TableData.tableData.map(row => {
                    row.age++
                    if (row.age > 80) {
                        row.age = 0
                    }
                })
            }, 1000)
        },
        editTable (row) {
            this.$Notification.success('正在编辑' + row._value[1], '', 3000)
        },
        removeTableItem (row) {
            this.TableData.tableData.forEach(item => {
                if (item.id === row.id) {
                    this.TableData.tableData.$remove(item)
                }
            })
            this.$Notification.success('删除' + row._value[1] + '成功', '', 3000)
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