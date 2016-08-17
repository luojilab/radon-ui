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
        <rd-text :textfield="form.username" @inputing="userInputing" @changing="userInputed"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.info"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.warning"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.success"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.failed"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.password" type="password"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.bio" :limit="limits.length"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.email" :limit="limits.email"></rd-text>
    </p>
    <p>
        <rd-text :textfield="form.phone" :limit="limits.phone"></rd-text>
    </p>
     <p>
        <rd-text :textfield="form.number" :limit="limits.number"></rd-text>
    </p>
    <p>
        <rd-textarea 
            :textfield="form.textArea"
        ></rd-textarea>
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
```html
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
## 验证

```

<rd-text :textfield="form.bio" :limit="limits.length"></rd-text>


<rd-text :textfield="form.email" :limit="limits.email"></rd-text>


<rd-text :textfield="form.phone" :limit="limits.phone"></rd-text>


<rd-text :textfield="form.number" :limit="limits.number"></rd-text>


```

```
limits: {
    length: {
        type: 'Length',
        min: 6,
        max: 12
    },
    email: {
        type: 'Email'
    },
    phone: {
        type: 'Phone'
    },
    number: {
        type: 'Number'
    }
}
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
## textarea

```html
<rd-textarea 
    :value.sync="textArea.value" 
    :auto-resize="true" 
    :input="textArea.input" 
    :change="textArea.change" 
    :line-height="textArea.lineHeight"
    :min-height="textArea.minHeight"
></rd-textarea>

```
```javascript
 textArea: {
    value: '',
    minHeight: 100,
    autoResize: true,
    lineHeight: 14,
    input () {
        console.log('textarea is inputing')
    },
    change () {
        console.log('textarea is changed')
    }
},

```
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdText,
    rdTextarea
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
            textArea: {
                value: '',
                minHeight: 100,
                autoResize: true,
                lineHeight: 14,
                input () {
                    console.log('textarea is inputing')
                },
                change () {
                    console.log('textarea is changed')
                }
            },
            limits: {
                length: {
                    type: 'Length',
                    min: 6,
                    max: 12
                },
                email: {
                    type: 'Email'
                },
                phone: {
                    type: 'Phone'
                },
                number: {
                    type: 'Number'
                }
            },
            form: {
                bio: {
                    value: '',
                    placeHolder: ' 6 < length < 12',
                    title: '用户名:',
                    key: 'user',
                    state: 'default',
                    tip: ''
                },
                email: {
                    value: '',
                    placeHolder: 'Email',
                    title: '用户名:',
                    key: 'user',
                    state: 'default',
                    tip: ''
                },
                phone: {
                    value: '',
                    placeHolder: 'Phone Number',
                    title: '用户名:',
                    key: 'user',
                    state: 'default',
                    tip: ''
                },
                number: {
                    value: '',
                    placeHolder: 'Number',
                    key: 'user',
                    state: 'default',
                    tip: ''
                },
                username: {
                    value: '',
                    placeHolder: 'input here',
                    title: '用户名:',
                    key: 'user',
                    state: 'default',
                    tip: ''
                },
                password: {
                    value: '',
                    placeHolder: '',
                    state: 'default',
                    tip: ''
                },
                info: {
                    value: '',
                    placeHolder: 'info',
                    state: 'info',
                    tip: 'info'
                },
                warning: {
                    value: '',
                    placeHolder: 'warning',
                    state: 'warning',
                    tip: ''
                },
                failed: {
                    value: '',
                    placeHolder: 'failed',
                    state: 'failed',
                    tip: ''
                },
                success: {
                    value: '',
                    placeHolder: 'success',
                    state: 'success',
                    tip: ''
                },
                textArea: {
                    value: '',
                    title: '用户名:',
                    state: 'default',
                    minHeight: 100,
                    autoResize: true,
                    lineHeight: 14
                }
            }
        }
    },
    components: {
        rdText,
        rdTextarea,
        Mark
    },
    methods: {
        userInputing (text) {
            this.form.username.state = 'loading'
            setTimeout(() => {
                let i = Math.floor(Math.random() * 4.9)
                this.form.username.state = MAP[i].state
                this.form.username.tip = MAP[i].tip
            }, 500)
        },
        userInputed () {
            console.log('?')
            this.$Notification.success('你输入了' + this.form.username.value, '', 5000)
        }
    }
}
</script>