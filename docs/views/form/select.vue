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
    <p class="demo-content">
        <rd-select :select="form.selectProvince" @change="changeAction"></rd-select>
    </p>
    <p class="demo-content">
        <rd-select :select="form.selectCity" @change="changeAction"></rd-select>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

### select
```html
<rd-select :select="form.selectProvince" ></rd-select>
```
```javascript

selectProvince: {
    // 获取select选择的对象, 多选时为Array, 单选时为Object
    value   :Object || :Array,

    // 提供待选对象集合
    options :Array

    options: [{
        // 是否为多选 :Boolean, 默认为false
        multiple: false,
        // 选中状态 :Boolean
        selected: false,
        // 可用状态 :Boolean
        disabled: false,
        // 展示值 :String
        value: '四川',

        // 其他自定义属性
        id: 1 
    }]
}
```
## 代码
```javascript
export default {
    template: '<rd-select :select="form.selectProvince" @change="changeAction"></rd-select>',
    data () {
        return {
            form: {
                selectProvince: {
                    multiple: false,
                    key: 'selectProvince',
                    value: {},
                    options: [{
                        selected: true,
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
        rdSelect
    },
    methods: {
        changeAction (select, value) {
            console.log(this.form.selectProvince.value.value)
            console.log(select.value.value === this.form.selectProvince.value.value) // true
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
                    multiple: true,
                    key: 'selectCity',
                    value: [],
                    options: [{
                        selected: true,
                        disabled: false,
                        value: '成都',
                        id: 1
                    }, {
                        selected: true,
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
                selected: true,
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
                text: '广东',
                id: 3
            }]
        }, 1000)
    },
    methods: {
        changeAction (select, value) {
            console.log(this.form.selectProvince.value.value)
            console.log(select.value.value === this.form.selectProvince.value.value)
        }
    }
}
</script>