<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Notification 通知


>   在系统右上角显示通知提醒信息。经常用于以下情况：
    较为复杂的通知内容。
    带有交互的通知，给出用户下一步的行动点。
    系统主动推送。


`this.$Notification.success(title:String, content:String, wait:Number)`

## 示例

点击下面四个按钮试试
        </textarea>
    </mark>
    <p>
        <rd-button type="success" @click="success">success</rd-button>
        <rd-button type="danger" @click="danger">danger</rd-button>
        <rd-button type="warning" @click="warning">warning</rd-button>
        <rd-button type="info" @click="info">info</rd-button>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 代码

首先在项目的入口文件中引入 RadonUI, 调用 `Vue.use` 安装。

```javascript
// main.js
import { RadonInstall } from 'radon-ui'

Vue.use(RadonInstall, {
    Notification: true
})
```

在根组件添加 `rd-notification` 组件的位置

```
<!-- Vue root compoment template -->
<div id="app">
    <router-view></router-view>
    <rd-notification></rd-notification>
</div>
```

可以在任何组件中调用 `vm.$Notification.success(title, content, delay)` 来创建一个对话框了

```javascript
// any vue components
methods: {
    someAction () {
        this.$Notification.success('编辑成功', '', 5000)
    }
}

```

## API

`this.$Notification.create(type, title, content, delay)`

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| type           | String       | 消息类型 （info, warning, success, failed）|
| title          | String       | 消息标题    |
| content        | String       | 消息正文    |
| delay          | Number       | 等待时间，为空不会自动移除 |
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
        success () {
            this.$Notification.success('编辑成功', '', 5000)
        },
        info () {
            this.$Notification.info('info', '', 5000)
        },
        warning () {
            this.$Notification.warning('warning', '', 5000)
        },
        danger () {
            this.$Notification.failed('failed', '', 5000)
        }
    }
}
</script>