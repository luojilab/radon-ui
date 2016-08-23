<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Switch 开关

用于可以操作的两种状态切换

        </textarea>
    </mark>
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
    <mark>
        <textarea class="ex-mark-text">
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
<rd-switch :value="switchA" ></rd-switch>
```

### change
> Event: Function

```
<rd-switch :value="switchA" @change="changeAction"></rd-switch>
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
  template: `<rd-switch :value="switchA" size="small"></rd-switch>
            <rd-switch :value="switchB"></rd-switch>`,
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
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdSwitch
} from 'radon-ui'

export default {
    data () {
        return {
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
        Mark
    },
    methods: {
        changeAction (obj) {
            console.log(obj)
        }
    }
}
</script>