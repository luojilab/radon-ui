<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Slider 滑动输入条

## 示例
    </rd-mark>
    <p>
        {{slider}}
    </p>
    <p>
        <rd-slider :slider="slider" @change="changeAction"></rd-slider>
    </p>
    <rd-mark>
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
{{code.one}}
```

### change

> Event: Function

```
{{code.two}}
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
    template: '{{code.two}}',
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
    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdSlider
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: '<rd-slider :slider="slider"></rd-slider>',
                two: `<rd-slider :slider="slider" @change="changeAction"></rd-slider>`
            },
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
        rdMark
    },
    methods: {
        changeAction (percent) {
            console.log(percent)
        }
    }
}
</script>
