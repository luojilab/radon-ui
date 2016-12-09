<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# 下拉按钮

### 示例
    </rd-mark>
    <p>
        <rd-drop-button text="操作">
            <rd-button>编辑</rd-button>
            <rd-button>审核</rd-button>
            <rd-button>删除</rd-button>
        </rd-drop-button>
    </p>
    <p>
        <rd-drop-button text="操作" type="success">
            <rd-button>编辑</rd-button>
            <rd-button>审核</rd-button>
            <rd-button>删除</rd-button>
        </rd-drop-button>
    </p>
    <p>
        <rd-drop-button text="操作" :disabled="true">
            <rd-button>编辑</rd-button>
            <rd-button>审核</rd-button>
            <rd-button>删除</rd-button>
        </rd-drop-button>
    </p>
    <rd-mark>
### 代码
```html
{{code.one}}
```

### API

`props`：

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| text           | String       | 显示文字       |
| type           | String       | 状态 （primary， info, warning, success, danger）|
| disabled       | Bolean       | 可用状态         |


`slot`：

可以在 `{{code.two}}` 标签中放置任意数量的 `{{code.three}}`
    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdButton,
    rdDropButton
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: `<rd-drop-button text="操作">
    <rd-button>编辑</rd-button>
    <rd-button>审核</rd-button>
    <rd-button>删除</rd-button>
</rd-drop-button>`,
two: `<rd-drop-button></rd-drop-button>`,
three: `<rd-button></rd-button>`
            }
        }
    },
    components: {
        rdButton,
        rdDropButton,
        rdMark
    }
}
</script>