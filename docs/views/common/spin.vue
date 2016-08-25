<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Spin 加载中
用于页面和区块的加载中状态。
### 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

### 示例
        </textarea>
    </mark>
    <p>
        <rd-spin></rd-spin>
        <rd-spin color="red"></rd-spin>
        <rd-spin color="blue"></rd-spin>
    </p>
    <mark>
        <textarea class="ex-mark-text">
### 代码
```html
<rd-spin></rd-spin>
<rd-spin color="red"></rd-spin>
<rd-spin color="blue"></rd-spin>
```

        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdSpin
} from 'radon-ui'

export default {
    components: {
        rdSpin,
        Mark
    }
}
</script>