<template>
<div class="ex-content">
    <div class="ex-card">
     <mark>
        <textarea class="ex-mark-text">
# AutoSearch
查找输入内容。

## 何时使用

 - 当需要根据表单输入的内容实时检取数据时。
        </textarea>
    </mark>
        <p>getData 方法用来查找的数据: {{text}}</p>
        <p>
            <rd-auto-search :search="search" @inputing="getData"></rd-auto-search>
        </p>
    <mark>
        <textarea class="ex-mark-text">
# API

## Value: search 
search 是返回数据的数组对象，它有一个对象列表，当输入内容时，会弹出一个选择列表，选中某个值时，该值将被选中并显示
## Event: @inputing
inputing 事件会监听输入状态，当输入内容时会返回当前输入的值和当前触发事件的对象
```
search: {
    list: [{
        id: '1',
        value: '选择1',
        selected: false
    }, {
        id: '2',
        value: '选择2',
        selected: false
    }, {
        id: '3',
        value: '选择3',
        selected: false
    }]
}

<rd-auto-search :search="search" @inputing="getData"></rd-auto-search>

## list
选择结果数组

```

        </textarea>
    </mark>
<mark>
        <textarea class="ex-mark-text">
## 完整示例代码
```javascript

export default {
    template: '<rd-auto-search :search="search" @inputing="getdata"></rd-auto-search>',
    data () {
        return {
            search: {
                list: [{
                    id: '1',
                    value: '选择1',
                    selected: false
                }, {
                    id: '2',
                    value: '选择2',
                    selected: false
                }, {
                    id: '3',
                    value: '选择3',
                    selected: false
                }]
            }
        }
    },
    components: {
        rdAutoSearch
    },
    methods: {
        getData (value) {
            console.log(value)
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
    rdAutoSearch
} from 'radon-ui'

export default {
    data () {
        return {
            text: '',
            search: {
                list: [{
                    id: '1',
                    value: '选择1',
                    selected: false
                }, {
                    id: '2',
                    value: '选择2',
                    selected: false
                }, {
                    id: '3',
                    value: '选择3',
                    selected: false
                }]
            }
        }
    },
    components: {
        rdAutoSearch,
        Mark
    },
    methods: {
        getData (value) {
            this.text = value
        }
    }
}
</script>