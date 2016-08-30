<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# 下拉按钮

### 示例
        </textarea>
    </mark>
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
    <mark>
        <textarea class="ex-mark-text">
### 代码
```html
<rd-drop-button text="操作">
    <rd-button>编辑</rd-button>
    <rd-button>审核</rd-button>
    <rd-button>删除</rd-button>
</rd-drop-button>
```

### API

`props`：

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| text           | String       | 显示文字       |
| type           | String       | 状态 （primary， info, warning, success, danger）|
| disabled       | Bolean       | 可用状态         |


`slot`：

可以在 `<rd-drop-button></rd-drop-button>` 标签中放置任意数量的 `<rd-button></rd-button>`

        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdButton,
    rdDropButton
} from 'radon-ui'

export default {
    components: {
        rdButton,
        rdDropButton,
        Mark
    }
}
</script>