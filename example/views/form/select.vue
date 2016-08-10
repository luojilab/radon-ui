<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Select 选择器
 > 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器

## 示例
        </textarea>
    </mark>
    <p>
        <rd-select :select="form.selectProvince" @change="changeAction"></rd-select>
        <rd-select :select="form.selectCity" @change="changeAction"></rd-select>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

```html
<rd-select :value.sync="selectProvince.value" :options.sync="selectProvince.options"></rd-select>
```
```javascript
// 获取select选择的对象
value   :Object

// 提供待选对象集合
options :Array

options: {
    // 选中状态 :Boolean
    selected: false,
    // 可用状态 : Boolean
    disabled: false,
    // 展示值 : String
    value: '四川',

    // 其他自定义属性
    id: 1 
}
```
## 代码
```javascript
export default {
    template: '<rd-select :value.sync="selectProvince.value" :options.sync="selectProvince.options"></rd-select>',
    data () {
        return {
            selectProvince: {
                value: {},
                options: [{
                    selected: false,
                    disabled: false,
                    value: '四川',
                    id: 1
                }, {
                    selected: false,
                    disabled: false,
                    value: '北京',
                    id: 2
                }, {
                    selected: false,
                    disabled: false,
                    value: '广东',
                    id: 3
                }]
            }
        }
    },
    components: {
        rdSelect
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
    rdSelect
} from '../../../src/components/index'

export default {
    data () {
        return {
            form: {
                selectProvince: {
                    key: 'selectProvince',
                    value: {},
                    options: []
                },
                selectCity: {
                    key: 'selectCity',
                    value: {},
                    options: [{
                        selected: false,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: false,
                        disabled: false,
                        value: '北京',
                        id: 2
                    }, {
                        selected: false,
                        disabled: false,
                        value: '深圳',
                        id: 3
                    }]
                }
            }
        }
    },
    components: {
        rdSelect,
        Mark
    },
    ready () {
        setTimeout(() => {
            this.form.selectProvince.options = [{
                selected: false,
                disabled: false,
                value: '四川',
                id: 1
            }, {
                selected: false,
                disabled: false,
                value: '北京',
                id: 2
            }, {
                selected: false,
                disabled: false,
                value: '广东',
                id: 3
            }]
        }, 1000)
    },
    methods: {
        changeAction (select, value) {
            console.log(this.form.selectProvince.value.value)
            console.log(select.value.value)
        }
    }
}
</script>