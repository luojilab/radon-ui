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
    data () {
        return {
            datePicker: {
                value: '',
                options: {
                    format: 'YYYY-MM-DD',
                    monthList: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
                    ],
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