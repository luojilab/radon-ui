<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Tooltip 文字提示 
        </textarea>
    </mark>
    <p>
        <radon-button type="primary"><rd-tooltip>这里是tooltip</rd-tooltip>鼠标移上来就会出现提示 按钮</radon-button>
        <span>鼠标移上来就会出现提示<rd-tooltip>这里是tooltip</rd-tooltip></span>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 代码
```html
// template
<p>
    <radon-button type="primary"><rd-tooltip>嗯</rd-tooltip>按钮的tooltip</radon-button>
    <span>233333333<rd-tooltip>这里是tooltip</rd-tooltip></span>
    <span>啊啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span>
    <span>按时打算发生的<rd-tooltip>这里是tooltip</td-tooltip></span>
    <span>啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span>
</p>

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
## 示例

        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    rdTooltip,
    radonButton
} from '../../src/components/index'

export default {
    components: {
        radonButton,
        rdTooltip,
        mark
    }
}
</script>