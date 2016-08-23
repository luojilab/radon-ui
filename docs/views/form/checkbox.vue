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
            <rd-checkbox :checkbox="checkbox"></rd-checkbox>
            <rd-checkbox :checkbox="checkA"></rd-checkbox>
        </p>
        <mark>
            <textarea class="ex-mark-text">
### 代码

```html
<rd-checkbox :checkbox="checkbox"></rd-checkbox>
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
        Mark
    }
}
</script>