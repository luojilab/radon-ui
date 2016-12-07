<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Switch 开关

用于可以操作的两种状态切换

    </rd-mark>
    <p>
        switchA: {{switchA | json}}
    </p>
    <p>
        switchB: {{switchB | json}}
    </p>
    <p>
        <rd-switch :value="switchA" @change="changeAction"></rd-switch>
        <rd-switch :value="switchB"></rd-switch>
    </p>
    <rd-mark>
## API

### value
> props: Object

```
switchA: {
    checked: false,
    size: 'small'
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
    changeAction (obj) {
        console.log(obj) // { checked: false }
    }
}
```


## 示例代码
```javascript
export default { 
  template: `{{code.three}}`,
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
    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdSwitch
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: `<rd-switch :value="switchA" ></rd-switch>`,
                two: `<rd-switch :value="switchA" @change="changeAction"></rd-switch>`,
                three: `<rd-switch :value="switchA" size="small"></rd-switch>
            <rd-switch :value="switchB"></rd-switch>`
            },
            switchA: {
                checked: false,
                size: 'small'
            },
            switchB: {
                checked: false
            }
        }
    },
    components: {
        rdSwitch,
        rdMark
    },
    methods: {
        changeAction (obj) {
            console.log(obj)
        }
    }
}
</script>