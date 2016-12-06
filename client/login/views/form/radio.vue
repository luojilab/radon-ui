<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Radio 单选框

简单的radio
 * 用于在多个备选项中选中单个状态。
 * 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
    </rd-mark>
        <p>
            radio集合： 
        </p>
        <p>
            <rd-radio-group :radios="radios"></rd-radio-group>
        </p>
        <p>
            单个radio： 
        </p>
        <p>
             <rd-radio :radio="radio"></rd-radio>
        </p>
    <rd-mark>
## rdRadio

### radio

radio: Object

** radio **

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| checked        | Bolean       | 选中状态       |
| disabled       | Bolean       | 可用状态 (可选) |
| value          | String       | 选中值         |


### change

Event: Function 
params: radio

```
{{code.one}}
```
回调参数为 radio 对象



## rdRadioGroup

多个radio 对象的数组

### radios

> props Array

```html
{{code.two}}
```

```
radios: [{
    // radio 的选择状态:Boolean
    checked: false,
    // radio 的展示文字: String
    value: 'A'
}, {
    checked: false,
    value: 'B'
}]
```
    </rd-mark>
    <rd-mark>
## 示例代码
```javascript
export default { 
  template: '{{code.two}}',
  data () {
    return {
        radios: [{
            disabled: true,
            checked: false,
            value: '北京'
        }, {
            checked: false,
            value: '上海'
        }, {
            checked: false,
            value: '杭州'
        }, {
            checked: false,
            value: '成都'
        }]
    }
  },
  components: {
    rdCheckbox
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
    rdRadio,
    rdRadioGroup
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: `<rd-radio :radio="radio" @change="checkAction"></rd-radio>`,
                two: `<rd-radio :radios="radios"></rd-radio>`
            },
            radio: {
                checked: false,
                value: '王宝强'
            },
            radios: [{
                disabled: true,
                checked: false,
                value: '北京'
            }, {
                checked: false,
                value: '上海'
            }, {
                checked: false,
                value: '杭州'
            }, {
                checked: false,
                value: '成都'
            }]
        }
    },
    components: {
        rdRadio,
        rdRadioGroup,
        rdMark
    },
    methods: {
        checkAction (radio) {
            console.log(radio)
        }
    }
}
</script>