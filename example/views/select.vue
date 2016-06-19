<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Select 选择器

## 代码
```javascript
export default {
    template: '<radon-select :value.sync="selectProvince.value" :options.sync="selectProvince.options"></radon-select>',
    data () {
        return {
            selectProvince: {
                value: {},
                options: [{
                    selected: false,
                    disabled: false,
                    value: '四川',
                    id: 1
                }, {
                    selected: false,
                    disabled: false,
                    value: '北京',
                    id: 2
                }, {
                    selected: false,
                    disabled: false,
                    value: '广东',
                    id: 3
                }]
            }
        }
    },
    components: {
        rdSelect
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <rd-select :value.sync="selectProvince.value" :options.sync="selectProvince.options"></rd-select>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    rdSelect
} from '../../src/components/index'

export default {
    data () {
        return {
            selectProvince: {
                value: {},
                options: [{
                    selected: false,
                    disabled: false,
                    value: '四川',
                    id: 1
                }, {
                    selected: false,
                    disabled: false,
                    value: '北京',
                    id: 2
                }, {
                    selected: false,
                    disabled: false,
                    value: '广东',
                    id: 3
                }]
            }
        }
    },
    components: {
        rdSelect,
        mark
    }
}
</script>