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
            <rd-tree :tree-data="treeData"></rd-tree>
        </p>

    <mark>
        <textarea class="ex-mark-text">
## 代码

```
<rd-tree :tree-data="treeData"></rd-tree>
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
    rdTree
} from 'radon-ui'

export default {
    data () {
        return {
            treeData: [{
                expand: false,
                checkbox: {
                    checked: false
                },
                title: '根',
                key: 'root',
                children: [{
                    expand: false,
                    checkbox: {
                        checked: false
                    },
                    title: '叶子',
                    key: 'leaf'
                }]
            }]
        }
    },
    components: {
        rdTree,
        Mark
    }
}
</script>