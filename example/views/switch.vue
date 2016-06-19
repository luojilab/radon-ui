<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Switch 开关

## 代码
```javascript
export default { 
  template: `<radon-switch :checked.sync="switchA" size="small"></radon-switch>
            <radon-switch :checked.sync="switchA"></radon-switch>`,
  data () {
        return {
            switchA: false
        }
    },
    components: {
        radonSwitch
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <radon-switch :checked.sync="switchA" size="small"></radon-switch>
            <radon-switch :checked.sync="switchA"></radon-switch>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    radonSwitch
} from '../../src/components/index'

export default {
    data () {
        return {
            switchA: false
        }
    },
    components: {
        radonSwitch,
        mark
    }
}
</script>