<template>
<div class="ex-content">
    <h2></h2>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
# Checkbox 多选框

简单的checkbox

### 示例
            </textarea>
        </mark>
        <p>
            <rd-checkbox :checkbox="checkbox" @change="handleChange"></rd-checkbox>
            <rd-checkbox :checkbox="checkA"></rd-checkbox>
        </p>
        <mark>
            <textarea class="ex-mark-text">
### 代码

```html
<rd-checkbox :checkbox="checkbox" @change="handleChange"></rd-checkbox>
```

```javascript
export default {
    data () {
        return {
            checkbox: {
                // checked: false, 默认不选中
                text: "我已阅读用户协议"
            }
        }
    },
    methods: {
        handleChange (checkbox, vm, e) {
            this.$Modal.confirm(
                '复选框',
                `checkbox: ${checkbox.checked}`
            )
        }
    }
    components: {
       rdCheckbox
    }
}
```

### API

** checkbox **

| 参数            | 类型         | 说明        |
| :------------- |:-------------|:------------|
| checked       | Bolean       | 选中状态     |
| disabled       | Bolean       | 禁用状态     |
| text           | String       | 文字         |
| change         | 事件         | 复选框改变事件 参数checkbox;vm;event         |

            </textarea>
        </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdCheckbox
} from 'radon-ui'

export default {
    data () {
        return {
            checkbox: {
                text: '我已阅读用户协议'
            },
            checked: false,
            checkA: {
                disabled: false,
                checked: true,
                text: '同意服务条款'
            }
        }
    },
    methods: {
        handleChange (checkbox, vm, e) {
            this.$Modal.confirm(
                '复选框',
                `checkbox: ${checkbox.checked}`
            )
        }
    },
    components: {
        rdCheckbox,
        Mark
    }
}
</script>
