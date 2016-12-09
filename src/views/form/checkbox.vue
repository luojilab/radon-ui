<template>
<div class="ex-content">
    <h2></h2>
    <div class="ex-card">
        <rd-mark>
# Checkbox 多选框

简单的checkbox

### 示例
        </rd-mark>
        <p>
            <rd-checkbox :checkbox="checkbox"></rd-checkbox>
            <rd-checkbox :checkbox="checkA"></rd-checkbox>
        </p>
        <rd-mark>
### 代码

```html
{{code.one}}
```

```javascript
export default {
    data () {
        return {
            checkbox: {
                checked: false,
                text: "我已阅读用户协议"
            }
        }
    },
    components: {
       rdCheckbox
    }
}
```

### API

** checkbox **

| 参数            | 类型         | 说明        |
| :------------- |:-------------|:------------|
| checked        | Bolean       | 选中状态     |
| text           | String       | 文字         |
        </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdCheckbox
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: '<rd-checkbox :checkbox="checkbox"></rd-checkbox>'
            },
            checkbox: {
                checked: false,
                text: '我已阅读用户协议'
            },
            checkA: {
                disabled: false,
                checked: false,
                text: '同意服务条款'
            }
        }
    },
    components: {
        rdCheckbox,
        rdMark
    }
}
</script>