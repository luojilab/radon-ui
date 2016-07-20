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

```
this.$Notification.success(title:String, content:String, wait:Number)  
```
## 示例

点击下面四个按钮试试
        </textarea>
    </mark>
    <p>
        <rd-button @click="success">success</rd-button>
        <rd-button @click="failed">failed</rd-button>
        <rd-button @click="warning">warning</rd-button>
        <rd-button @click="info">info</rd-button>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 示例代码
```
<rd-notification :notifications="Notifications"></rd-notification>
```
```javascript
//root component
import {
    rdModal
} from '../src/components/index'

export default {
    data () {
        return {
            Notifications: []
        }
    },
    created () {
        this.$SetRoot(this)
    },
    components: {
        rdNotification
    },
}

// any vue components
methods: {
    someAction () {
        this.$Notification.success('编辑成功', '', 5000)
    }
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
        success () {
            this.$Notification.success('编辑成功', '', 5000)
        },
        info () {
            this.$Notification.info('info', '', 5000)
        },
        warning () {
            this.$Notification.warning('warning', '', 5000)
        },
        failed () {
            this.$Notification.failed('failed', '', 5000)
        }
    }
}
</script>