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
        <radon-text :textfield="form.user" :input="userInputing"></radon-text>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

### textfield
输入框的基础对象
```
<template>
    <radon-text :textfield="user"></radon-text>   
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
### input
输入框 oninput hook
```
<radon-text :textfield="obj" :input="Inputing"></radon-text>

methods: {
    Inputing () {
        console.log('is inputing')
    }
}
```

## 完整示例代码
```javascript
export default {
    template: '<radon-text :textfield="form.user" :input="userInputing"></radon-text>'
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
        radonText,
    },
    methods: {
        userInputing () {
            this.form.user.state = 'loading'
            setTimeout(() => {
                if (this.form.user.value.length &lt; 6) {
                    this.form.user.state = 'failed'
                    this.form.user.tip = '该用户名已被使用'
                } else {
                    this.form.user.state = 'default'
                    this.form.user.tip = ''
                }
            }, 2000)
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
import mark from './mark.vue'
import {
    radonText
} from '../../src/components/index'

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
        radonText,
        mark
    },
    methods: {
        userInputing () {
            this.form.user.state = 'loading'
            setTimeout(() => {
                if (this.form.user.value.length < 6) {
                    this.form.user.state = 'failed'
                    this.form.user.tip = '该用户名已被使用'
                } else {
                    this.form.user.state = 'default'
                    this.form.user.tip = ''
                }
            }, 2000)
        }
    }
}
</script>