<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Tag 标签

用于一些突出展示事物的状态、属性

### 示例
        </textarea>
    </mark>
    <p>
        <rd-tag value="simple tag"></rd-tag>
        <rd-tag type="info" value="simple tag"></rd-tag>
        <rd-tag type="warning" value="simple tag"></rd-tag>
        <rd-tag type="success" value="simple tag"></rd-tag>
        <rd-tag type="danger" value="simple tag" icon="ion-close-circled"></rd-tag>
    </p>
    <mark>
        <textarea class="ex-mark-text">
### 代码
```html
<rd-tag value="simple tag"></rd-tag>
<rd-tag type="info" value="simple tag"></rd-tag>
<rd-tag type="warning" value="simple tag"></rd-tag>
<rd-tag type="success" value="simple tag"></rd-tag>
<rd-tag type="danger" value="simple tag"></rd-tag>
```

### API

`props`：

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| value          | String       | 显示文字       |
| type           | String       | 状态 （primary， info, warning, success, danger）|
| icon           | String       | 图标         |

        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdTag
} from 'radon-ui'

export default {
    components: {
        rdTag,
        Mark
    }
}
</script>