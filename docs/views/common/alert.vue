<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Alert 警告提示框

警告提示框，是一个简单的数据视图组件，它可以以数组接收并生成多个alert。
对象中 `content` 属性是辅助性文字，如果 content 为空或者没有该属性，alert 会是一个 small 状态。
        </textarea>
    </mark>

        <p>
            <rd-alert :alerts="alerts"></rd-alert>
        </p>

    <mark>
        <textarea class="ex-mark-text">
## 代码

```
<rd-alert :alerts="alerts"></rd-alert>
```

```javascript
export default {
    data () {
        return {
            alerts: [{
                show: true,
                state: 'success',
                title: '成功提示的文案',
                content: '成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'
            }, {
                show: true,
                state: 'info',
                title: '提示的文案',
                content: ''
            }, {
                show: true,
                state: 'warning',
                title: '警告提示的文案',
                content: ''
            }, {
                show: true,
                state: 'failed',
                title: '失败提示的文案',
                content: ''
            }]
        }
    },
    components: {
        rdAlert
    }
}
```
## API

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| show           | Bolean       | 显示           |
| state          | String       | 状态 （info, warning, success, failed）  |
| title          | String       | 主文字          |
| content        | String       | 辅助文字        |


        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdAlert
} from 'radon-ui'

export default {
    data () {
        return {
            alerts: [{
                show: true,
                state: 'success',
                title: '成功提示的文案',
                content: '成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'
            }, {
                show: true,
                state: 'info',
                title: '提示的文案',
                content: ''
            }, {
                show: true,
                state: 'warning',
                title: '警告提示的文案',
                content: ''
            }, {
                show: true,
                state: 'failed',
                title: '失败提示的文案',
                content: ''
            }]
        }
    },
    components: {
        rdAlert,
        Mark
    }
}
</script>