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
this.$Modal.create(title:String, content:String, onConfirm:Function, onCancle:Function)
```
## 示例
        </textarea>
    </mark>
    <p>
        <rd-button @click="open">开启对话框</rd-button>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 代码


首先在项目的入口文件中引入 RadonUI, 调用 `Vue.use` 安装。

```javascript
// main.js
import RadonUI from 'radon-ui/install'

Vue.use(RadonUI, {
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

上面的准备工作完成之后，就可以在任何组件中调用 `vm.$Modal.create` 来创建一个对话框了

```javascript
// any vue components
export default {
    methods: {
        open () {
            this.$Modal.create(
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

`this.$Modal.create(title, content, confirm, cancel)`

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| title          | String       | 窗口标题       |
| content        | String       | 正文描述文字    |
| confirm        | Function     | 确认回调函数     |
| cancel         | Function     | 取消或者关闭回调函数 |

        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdButton
} from '../../../src/components/index'

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
            this.$Modal.create(
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
</script>