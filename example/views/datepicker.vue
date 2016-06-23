<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Datepicker 日期选择
 > 输入或选择日期的控件。
  当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。
        </textarea>
    </mark>
    <p>
        <rd-date-picker :value.sync="datePicker.value" :options="datePicker.options"></rd-date-picker>
    </p>
    <mark>
        <textarea class="ex-mark-text">

## API
```html
<rd-date-picker :value.sync="datePicker.value" :options="datePicker.options"></rd-date-picker>
```
```
datePicker: {
    // 返回选取值
    value: '',
    // 配置
    options: {
        // 格式化 :String (建议参考 moment文档)
        format: 'YYYY-MM-DD',
        // 月份 文字集合 默认为中文
        monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        // 周 文字集合 默认为中文
        weekList: ['一', '二', '三', '四', '五', '六', '日']
    }
}
```
## 代码
```javascript
export default { 
  template: '<rd-date-picker :value.sync="datePicker.value" :options="datePicker.options"></rd-date-picker>',
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
        </textarea>
    </mark>
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