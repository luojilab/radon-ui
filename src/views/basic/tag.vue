<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Tag 标签

用于一些突出展示事物的状态、属性

### 示例
    </rd-mark>
    <p>
        <rd-tag value="simple tag"></rd-tag>
        <rd-tag type="info" value="simple tag"></rd-tag>
        <rd-tag type="warning" value="simple tag"></rd-tag>
        <rd-tag type="success" value="simple tag"></rd-tag>
        <rd-tag type="danger" value="simple tag" icon="ion-close-circled"></rd-tag>
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
| value          | String       | 显示文字       |
| type           | String       | 状态 （primary， info, warning, success, danger）|
| icon           | String       | 图标         |
    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdTag
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: `<rd-tag value="simple tag"></rd-tag>
<rd-tag type="info" value="simple tag"></rd-tag>
<rd-tag type="warning" value="simple tag"></rd-tag>
<rd-tag type="success" value="simple tag"></rd-tag>
<rd-tag type="danger" value="simple tag"></rd-tag>`
            }
        }
    },
    components: {
        rdTag,
        rdMark
    }
}
</script>