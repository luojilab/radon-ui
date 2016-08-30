<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# NumberTextfield 数字输入框
用于简单的数字输入
        </textarea>
    </mark>
    <p>
        <rd-number :number="number"></rd-number>
    </p>
    <p>
        <rd-number :number="numberA"></rd-number>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

| API            | Type         | data   |params |
| :------------- |:-------------| :------|:------|
| number         | Props        | Object |       |
| change         | Event        |        |number |


## 实例：

### number

```
number: {
    value: 0,  // 必选 Number 
    step: 0.1, // 可选
    format: 2, // 可选
    min: -5,   // 可选
    max: 10    // 可选
}
```

```
<rd-number :number="number"></rd-number>
```
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdNumber
} from 'radon-ui'

export default {
    data () {
        return {
            number: {
                value: 0,
                step: 0.1,
                format: 2,
                min: -5,
                max: 10
            },
            numberA: {
                value: 0
            }
        }
    },
    components: {
        rdNumber,
        Mark
    },
    methods: {
        changeAction (obj) {
            console.log(obj)
        }
    }
}
</script>