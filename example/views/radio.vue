<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Radio 单选框
简单的radio

## 代码
```javascript
export default { 
  template: '<radon-checkbox :checkbox="checkbox"></radon-checkbox>'
  data () {
    return {
      checkbox: {
        checked: false,
        text: '我已阅读用户协议'
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
            <radon-radio :radios="radios"></radon-radio>
        </p>
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