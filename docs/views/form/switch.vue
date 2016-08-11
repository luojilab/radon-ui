<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Switch 开关

## 代码
```javascript
export default { 
  template: `<rd-switch :checked.sync="switchA" size="small"></rd-switch>
            <rd-switch :checked.sync="switchB"></rd-switch>`,
  data () {
        return {
            switchA: false,
            switchB: false
        }
    },
    components: {
        rdSwitch
    }
}
```
## 示例
        </textarea>
    </mark>
        <p>
            <rd-switch :checked.sync="switchA" size="small"></rd-switch>
            <rd-switch :checked.sync="switchB"></rd-switch>
        </p>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdSwitch
} from '../../../src/components/index'

export default {
    data () {
        return {
            switchA: false,
            switchB: false
        }
    },
    components: {
        rdSwitch,
        Mark
    }
}
</script>