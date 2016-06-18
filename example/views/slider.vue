<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Slider 滑动输入条

## 代码
```javascript
export default {
    template: '<rd-slider :value.sync="slider"></rd-slider>',
    data () {
        return {
            slider: 43,
        }
    },
    components: {
        rdSlider
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <rd-slider :value.sync="slider"></rd-slider>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    rdSlider
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {
            slider: 43
        }
    },
    components: {
        rdSlider,
        mark
    }
}
</script>