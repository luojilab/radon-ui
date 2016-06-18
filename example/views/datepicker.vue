<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Datepicker 日期选择

## 代码
```javascript
export default { 
  template: '<rd-date-picker :value.sync="datePicker.value" :options="datePicker.options"></rd-date-picker>'
  data () {
        return {
            datePicker: {
                value: '',
                options: {
                    format: 'YYYY-MM-DD',
                    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    weekList: ['一', '二', '三', '四', '五', '六', '日']
                }
            }
        }
    },
    components: {
        rdDatePicker
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <rd-date-picker :value.sync="datePicker.value" :options="datePicker.options"></rd-date-picker>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    rdDatePicker
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {
            datePicker: {
                value: '',
                options: {
                    format: 'YYYY-MM-DD',
                    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    weekList: ['一', '二', '三', '四', '五', '六', '日']
                }
            }
        }
    },
    components: {
        rdDatePicker,
        mark
    }
}
</script>