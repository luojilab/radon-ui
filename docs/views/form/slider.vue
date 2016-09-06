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
        {{slider | json}}
    </p>
    <p>
        <rd-slider :slider="slider" @change="changeAction"></rd-slider>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

### slider

> props: Obejct

```
slider: {
    value: 66, // 必选 default 0，会根据step调整
    min: 10,   // 可选 default 0
    max: 100,  // 可选 default 100
    start: 0, // 可选 default 0
    end: 100,  // 可选 default 100
    step: 5    // 可选 default 1
}
```
```
<rd-slider :slider="slider"></rd-slider>
```

### change

> Event: Function

```
<rd-slider :slider="slider" @change="changeAction"></rd-slider>
```

```
methods: {
    changeAction (percent) {
        console.log(percent) // 当前百分比值 Number
    }
}
```


## 代码
```javascript
export default {
    template: '<rd-slider :slider="slider" @change="changeAction"></rd-slider>',
    data () {
        return {
            slider: {
                value: 66,
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
} from 'radon-ui'

export default {
    data () {
        return {
            slider: {
                value: 66,
                min: 10,
                max: 100,
                step: 5
            },
            sliderB: {
                value: 66
            }
        }
    },
    components: {
        rdSlider,
        Mark
    },
    methods: {
        changeAction (percent) {
            console.log(percent)
        }
    }
}
</script>
