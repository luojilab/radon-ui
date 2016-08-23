<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Tooltip 文字提示 
 > 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

## 示例
        </textarea>
    </mark>
    <p>
        <rd-button type="primary"><rd-tooltip>这里是tooltip</rd-tooltip>鼠标移上来就会出现提示 按钮</rd-button>
        <span>鼠标移上来就会出现提示<rd-tooltip>这里是tooltip</rd-tooltip></span>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 示例代码
```html
<!-- template -->
<p>
    <rd-button type="primary"><rd-tooltip>这里是tooltip</rd-tooltip>鼠标移上来就会出现提示 按钮</rd-button>
    <span>鼠标移上来就会出现提示<rd-tooltip>这里是tooltip</rd-tooltip></span>
</p>
```
```javascript
// script
import {
    rdTooltip
} from '../../src/components/index'

export default {
    components: {
        rdTooltip
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
    rdTooltip,
    rdButton
} from 'radon-ui'

export default {
    components: {
        rdButton,
        rdTooltip,
        Mark
    }
}
</script>