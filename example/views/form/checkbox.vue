<template>
<div class="ex-content">
    <h2></h2>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
# Checkbox 多选框
简单的checkbox

## 用法
```javascript
export default {
       template: ‘<radon-checkbox :checkbox="checkbox"></radon-checkbox>’
        data () {
            return {
                checkbox: {
                    checked: false,
                    text: "我已阅读用户协议"
                }
            }
        },
        components: {
           radonCheckbox
        }
    }
```
## 示例
            </textarea>
        </mark>
        <p>
            <radon-checkbox :checkbox="checkbox"></radon-checkbox>
            <radon-checkbox :checkbox="checkA"></radon-checkbox>
        </p>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    radonCheckbox
} from '../../../src/components/index'

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
        radonCheckbox,
        Mark
    }
}
</script>