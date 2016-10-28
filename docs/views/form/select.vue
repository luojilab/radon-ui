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
        <rd-select :select="form.selectDisable" @change="changeAction"></rd-select>
    </p>
    <p class="demo-content">
        <rd-select :select="form.selectCity" @change="changeAction"></rd-select>
    </p>
    <p>
        <rd-select :select="form.selectArriveCity" @change="changeAction"></rd-select> 
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
    
    // 是否启用选项搜索 :Boolean, 默认为false
    search: true,

    // 是否为多选 :Boolean, 默认为false
    multiple: false,

    // 是否禁用
    disabled: false, 

    // 提供待选对象集合
    options :Array

    options: [{
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
} from 'radon-ui'

export default {
    data () {
        return {
            form: {
                selectDisable: {
                    key: 'selectDisable',
                    disabled: true,
                    value: {},
                    options: [{
                        selected: false,
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
                    }, {
                        selected: false,
                        disabled: true,
                        value: '上海',
                        id: 4
                    }]
                },
                selectProvince: {
                    key: 'selectProvince',
                    search: true,
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
                    }, {
                        selected: false,
                        disabled: true,
                        value: '上海',
                        id: 4
                    }]
                },
                selectArriveCity: {
                    key: 'selectCity',
                    value: {},
                    options: []
                }
            }
        }
    },
    components: {
        rdSelect,
        Mark
    },
    ready () {
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

        setTimeout(() => {
            this.form.selectArriveCity.options = [{
                selected: false,
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
            }, {
                selected: false,
                disabled: true,
                value: '上海',
                id: 4
            }]
            // this.form.selectArriveCity.value = this.form.selectArriveCity.options[2]
            // this.form.selectArriveCity.value = this.form.selectArriveCity.options[2]
        }, 0)
    },
    methods: {
        changeAction (select, value) {
            console.log(this.form.selectProvince.value.value)
            console.log(select.value.value === this.form.selectProvince.value.value)
        }
    }
}
</script>