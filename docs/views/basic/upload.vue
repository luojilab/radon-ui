<template>
<div class="ex-content">
    <h2></h2>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
# Upload 上传组件

## 示例
            </textarea>
        </mark>
        <p>
            <rd-upload></rd-upload>
        </p>
        <mark>
            <textarea class="ex-mark-text">
## 用法
```html
<!-- template -->
<rd-upload></rd-upload>
```
```
// script
import {
    rdUpload
} from 'radon-ui'

export default {
    data () {
        return {
        }
    },
    components: {
        rdUpload
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
    rdUpload
} from '../../../src/components/index'

export default {
    data () {
        return {
        }
    },
    components: {
        rdUpload,
        Mark
    }
}
</script>