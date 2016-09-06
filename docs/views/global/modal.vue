<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Modal 弹窗
模态对话框。
## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时
```
this.$Modal.confirm(title:String, content:String, onConfirm:Function, onCancle:Function, options: Object)
```
## 示例
        </textarea>
    </mark>
    <p>
        <rd-button @click="open">开启对话框</rd-button>
        <rd-button @click="openWithOption">开启对话框 (自定义按钮类型)</rd-button>
    </p>
    <p>
        <rd-button @click="openHTML">开启对话框</rd-button>
        <rd-button @click="openHTMLWithLarge">开启对话框 (options.large = true)</rd-button>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 代码


首先在项目的入口文件中引入 RadonUI, 调用 `Vue.use` 安装。

```javascript
// main.js
import { RadonInstall } from 'radon-ui'

Vue.use(RadonInstall, {
    Modal: true
})
```

在根组件添加 `rd-modal` 组件的位置

```
<!-- Vue root compoment template -->
<div id="app">
    <router-view></router-view>
    <rd-modal></rd-modal>
</div>
```

上面的准备工作完成之后，就可以在任何组件中调用 `vm.$Modal.confirm` 来创建一个对话框了

```javascript
// any vue components
export default {
    methods: {
        open () {
            this.$Modal.confirm(
                '这里是标题',
                '这里应该说点什么',
                () => {
                    this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
                },
                () => {
                    this.$Notification.success('你点击了取消', '', 5000)
                }
            )
        }
    }
}

```

## API

`this.$Modal.confirm(title, content, confirm, cancel， options)`

`this.$Modal.confirmWithHTML(title, rawHTML, confirm, cancel， options)`


| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| title          | String       | 窗口标题       |
| content        | String       | 正文描述文字|
| rawHTML        | String       | 在 confirmWithHTML 中使用，HTML字符|
| confirm        | Function     | 确认回调函数     |
| cancel         | Function     | 取消或者关闭回调函数 |
| options        | Object       | 详细配置项，可选  |


> Options

```
large: true, // Boolean
cancelButton: cancelButton || {
    show: true,  // Boolean
    type: '',    // String 请参考 Button 
    text: '取消' // String
},
confirmButton: confirmButton || {
    show: true,
    type: 'primary',
    text: '确定'
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
    rdButton
} from 'radon-ui'

export default {
    data () {
        return {}
    },
    components: {
        rdButton,
        Mark
    },
    methods: {
        open () {
            this.$Modal.confirm(
                '这里是标题',
                '这里应该说点什么',
                () => {
                    this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
                },
                () => {
                    this.$Notification.success('你点击了取消', '', 5000)
                }
            )
        },
        openWithOption () {
            this.$Modal.confirm(
                '这里是标题',
                '这里应该说点什么',
                () => {
                    this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
                },
                () => {
                    this.$Notification.success('你点击了取消', '', 5000)
                }, {
                    cancelButton: {
                        show: true,
                        type: '',
                        text: '为啥要取消'
                    },
                    confirmButton: {
                        show: true,
                        type: 'success',
                        text: '确定'
                    }
                }
            )
        },
        openHTML () {
            this.$Modal.confirmWithHTML(
                '这里是标题',
                `
                    <h1>这里是个H1</h1>
                    <p>这里是一个段落</p>
                    <h2>这里是个H1</h2>
                `,
                () => {
                    this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
                },
                () => {
                    this.$Notification.success('你点击了取消', '', 5000)
                }
            )
        },
        openHTMLWithLarge () {
            this.$Modal.confirmWithHTML(
                '这里是标题',
                `
                    <h1>这里是个H1</h1>
                    <p>这里是一个段落</p>
                    <h2>这里是个H1</h2>
                `,
                () => {
                    this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
                },
                () => {
                    this.$Notification.success('你点击了取消', '', 5000)
                }, {
                    large: true
                }
            )
        }
    }
}
</script>