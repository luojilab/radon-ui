<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Alert 警告提示框

警告提示框，是一个简单的数据视图组件，它可以以数组接收并生成多个alert。
对象中 `content` 属性是辅助性文字，如果 content 为空或者没有该属性，alert 会是一个 small 状态。
    </rd-mark>
        <p>
            <rd-alert :alerts="alerts"></rd-alert>
        </p>
    <rd-mark>
## 代码

```
{{code.one}}
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

    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdAlert
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: '<rd-alert :alerts="alerts"></rd-alert>'
            },
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
        rdMark
    }
}
</script>