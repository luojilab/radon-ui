<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Radio 单选框
简单的radio
        </textarea>
    </mark>
        <p>
            <radon-radio :radios="radios"></radon-radio>
        </p>
    <mark>
        <textarea class="ex-mark-text">
# API

## radios
承载多个 radio 对象的数组

```
radios: [{
    // radio 的选择状态
    checked: false,
    // radio 的展示文字
    value: 'A'
}, {
    checked: false,
    value: 'B'
}]
```
        </textarea>
    </mark>
    <mark>
        <textarea class="ex-mark-text">
## 完整示例代码
```javascript
export default { 
  template: '<radon-radio :radios="radios"></radon-radio>'
  data () {
    return {
        radios: [{
            checked: false,
            value: 'A'
        }, {
            checked: false,
            value: 'B'
        }, {
            checked: false,
            value: 'C'
        }, {
            checked: false,
            value: 'aa'
        }]
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
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    radonRadio
} from '../../src/components/index'

export default {
    data () {
        return {
            radios: [{
                checked: false,
                value: 'A'
            }, {
                checked: false,
                value: 'B'
            }, {
                checked: false,
                value: 'C'
            }, {
                checked: false,
                value: 'aa'
            }]
        }
    },
    components: {
        radonRadio,
        mark
    }
}
</script>