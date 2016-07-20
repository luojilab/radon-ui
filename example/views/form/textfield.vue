<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Textfield 输入框
## 示例
        </textarea>
    </mark>
    <p>
        <rd-text :textfield="form.user" :input="userInputing" :change="userInputed"></rd-text>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

### textfield : Object
输入框的基础对象
```
<template>
    <rd-text :textfield="user"></rd-text>   
</template>
user: {
    // value 值 :String
    value: '',
    // placeHolder :String
    placeHolder: 'input here',
    // 输入框状态 :String
    state: 'default', // ['warning', 'failed', 'info', 'success']
    // 输入框提示文字 :String 
    tip: '' 
}
```
### input : Function
输入框 oninput hook
```
<rd-text :textfield="obj" :input="Inputing" ></rd-text>

methods: {
    Inputing () {
        console.log('is inputing')
    }
}
```
### change : Function
输入框 onchange hook
```
<rd-text :textfield="obj" :change="userInputed"></rd-text>

methods: {
    userInputed () {
        console.log('is changed')
    }
}
```

### type : String
input type
```
<rd-text :textfield="form.pass" :input="passInputing" type="password"></rd-text>
```

## 完整示例代码
```javascript
export default {
    template: '<rd-text :textfield="form.user" :input="userInputing"></rd-text>'
    data () {
        return {
            form: {
                user: {
                    value: '',
                    placeHolder: 'input here',
                    title: '用户名:',
                    state: 'default',
                    tip: ''
                }
            }
        }
    },
    components: {
        rdText,
    },
    methods: {
        userInputing () {
            this.form.user.state = 'loading'
            setTimeout(() => {
                let i = Math.floor(Math.random() * 4.9)
                this.form.user.state = MAP[i].state
                this.form.user.tip = MAP[i].tip
            }, 500)
        }
    }
}
```
## 示例
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdText
} from '../../../src/components/index'

const MAP = {
    0: {
        state: 'loading',
        tip: 'loading?!'
    },
    1: {
        state: 'failed',
        tip: '该用户名已被使用'
    },
    2: {
        state: 'success',
        tip: '该用户名似乎没有被使用'
    },
    3: {
        state: 'info',
        tip: '该用户名已被使用'
    },
    4: {
        state: 'warning',
        tip: '该用户名已被使用'
    }
}

export default {
    data () {
        return {
            form: {
                user: {
                    value: '',
                    placeHolder: 'input here',
                    title: '用户名:',
                    state: 'default',
                    tip: ''
                }
            }
        }
    },
    components: {
        rdText,
        Mark
    },
    methods: {
        userInputing () {
            this.form.user.state = 'loading'
            setTimeout(() => {
                let i = Math.floor(Math.random() * 4.9)
                this.form.user.state = MAP[i].state
                this.form.user.tip = MAP[i].tip
            }, 500)
        },
        userInputed () {
            console.log('?')
            this.$Notification.success('你输入了' + this.form.user.value, '', 5000)
        }
    }
}
</script>