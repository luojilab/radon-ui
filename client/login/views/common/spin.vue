<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Spin 加载中
用于页面和区块的加载中状态。
### 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

### 示例
    </rd-mark>
    <p>
        <rd-spin></rd-spin>
        <rd-spin color="red"></rd-spin>
        <rd-spin color="blue"></rd-spin>
    </p>
    <rd-mark>
### 代码
```html
{{code.one}}
```
    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdSpin
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: `<rd-spin></rd-spin>
<rd-spin color="red"></rd-spin>
<rd-spin color="blue"></rd-spin>`
            }
        }
    },
    components: {
        rdSpin,
        rdMark
    }
}
</script>