<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Slider 滑动输入条

## 示例
        </textarea>
    </mark>
    <p>
        {{slider.percent}}
    </p>
    <p>
        <rd-slider 
            :value.sync="slider.percent"
            :step="slider.step"
            :min="slider.min"
            :max="slider.max"
            :show-tip="true"
        ></rd-slider>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 代码
```javascript
export default {
    template: `
    <rd-slider 
                :value.sync="slider.percent"
                :step="slider.step"
                :min="slider.min"
                :max="slider.max"
                :show-tip="true"
            ></rd-slider>
    `,
    data () {
        return {
            slider: {
                percent: 66,
                min: 10,
                max: 100,
                step: 5
            }
        }
    },
    components: {
        rdSlider
    }
}
```
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdSlider
} from '../../../src/components/index'

export default {
    data () {
        return {
            slider: {
                percent: 66,
                min: 10,
                max: 100,
                step: 5
            }
        }
    },
    components: {
        rdSlider,
        Mark
    }
}
</script>