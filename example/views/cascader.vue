<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Cascader 级联选择

## 代码
```javascript
export default {
    data () {
        return {}
    },
    components: {
        rdTimeline
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <radon-cascader></radon-cascader>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    radonCascader
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {}
    },
    components: {
        radonCascader,
        mark
    }
}
</script>