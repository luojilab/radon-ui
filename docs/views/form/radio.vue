<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Radio 单选框

简单的radio
 * 用于在多个备选项中选中单个状态。
 * 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。


        </textarea>
    </mark>
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
    <mark>
        <textarea class="ex-mark-text">

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
<rd-radio :radio="radio" @change="checkAction"></rd-radio>
```
回调参数为 radio 对象



## rdRadioGroup

多个radio 对象的数组

### radios

> props Array

```html
<rd-radio :radios="radios"></rd-radio>
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
        </textarea>
    </mark>
    <mark>
        <textarea class="ex-mark-text">
## 示例代码
```javascript
export default { 
  template: '<rd-radio :radios="radios"></rd-radio>',
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
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdRadio,
    rdRadioGroup
} from 'radon-ui'

export default {
    data () {
        return {
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
        Mark
    },
    methods: {
        checkAction (radio) {
            console.log(radio)
        }
    }
}
</script>