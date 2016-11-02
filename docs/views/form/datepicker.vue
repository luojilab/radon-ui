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
        <rd-datepicker :date="datePicker" @update="updateAction"></rd-datepicker>
    </p>
    <p>
        <rd-datepicker :date="datetimePicker"></rd-datepicker>
    </p>
    <p>
        <rd-datepicker :date="datePickerWeekdayLimit"></rd-datepicker>
    </p>
    <p>
        <rd-datepicker :date="datePickerCustomerLimit"></rd-datepicker>
    </p>
    
    <mark>
        <textarea class="ex-mark-text">

## API
```html
<rd-datepicker :date="datePicker"></rd-datepicker>
```
```
datePicker: {
    value: '',
    rawDate: {},
    options: {
        format: 'YYYY/MM/DD',
        monthList: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
        ],
        weekList: ['一', '二', '三', '四', '五', '六', '日'],
        limit: {
            weekDay: {
                availables: [0, 1, 2, 3, 4]
            },
            customerLimit (day) {
                if (day.value % 5 === 0) {
                    return false
                }
                return true
            }
        }
    }
}
```

### 基本

```
datePicker: {
    value: ''
}
```

## 自定义格式

```
datePicker: {
    value: '',
    options: {
        format: 'YYYY/MM/DD'
    }
}
```

## 自定义文字

```
datePicker: {
    value: '',
    options: {
        monthList: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
        ],
        weekList: ['一', '二', '三', '四', '五', '六', '日']
    }
}
```

## 限制规则

```
datePicker: {
    value: '',
    rawDate: {},
    options: {
        limit: {
            // 周一 ☞ 周五 可选
            weekDay: {
                availables: [0, 1, 2, 3, 4] 
            },

            // 自定义函数
            // day: {
            //    inMonth: false, // Boolean
            //    time: Moment, // Moment 对象
            //    value: 12 // Number 当前日期 天 
            // }
            customerLimit (day) {
                if (day.value % 5 === 0) {
                    return false
                }
                return true
            }
        }
    }
}
```


## 代码
```javascript
export default { 
  template: '<rd-datepicker :value="datePicker.value" :options="datePicker.options"></rd-datepicker>',
  data () {
        return {
            datePicker: {
                value: '',
                options: {
                    format: 'YYYY/MM/DD',
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
    <p>
        <rd-datepicker :date="datePicker" @update="updateAction"></rd-datepicker>
    </p>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdDatepicker
} from 'radon-ui'

export default {
    data () {
        return {
            datePicker: {
                value: '',
                rawDate: {},
                options: {
                    autoPosition: false,
                    position: 'bottom', // 'top',
                    quickClose: true,
                    format: 'YYYY/MM/DD'
                }
            },
            datetimePicker: {
                value: '',
                rawDate: {},
                disabled: true,
                options: {
                    format: 'YYYY/MM/DD HH:mm:ss',
                    placeHolder: '请选择时间（time)',
                    timePicker: true
                }
            },
            datePickerWeekdayLimit: {
                value: '',
                rawDate: {},
                options: {
                    quickClose: false,
                    placeHolder: '请选择时间（weekDay)',
                    limit: {
                        weekDay: {
                            availables: [1, 2, 3, 4]
                        }
                    }
                }
            },
            datePickerCustomerLimit: {
                value: '',
                rawDate: {},
                options: {
                    placeHolder: '请选择时间（customerLimit)',
                    limit: {
                        customerLimit (day) {
                            if (day.value % 5 === 0) {
                                return false
                            }
                            return true
                        }
                    }
                }
            }
        }
    },
    components: {
        rdDatepicker,
        Mark
    },
    methods: {
        updateAction (date) {
            console.log(date)
        }
    }
}
</script>