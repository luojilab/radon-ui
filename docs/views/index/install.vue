<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# 安装

## 使用 npm 安装
> 还未发布

推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
可以通过 npm 直接安装到项目中，使用 import 或 require 进行引用。

```
npm install radon-ui
```

### Use basic component

```
// in customer.vue
import { rdDatePicker } from 'radon-ui'
```

### User global method

```javascript
// main.js
import Vue from 'vue'
import { RadonInstall } from 'radon-ui'

Vue.use(RadonInstall, {
    Modal: true,
    Notification: true,
    Preview: true
})
```

```html
<!-- set root Vue data & template -->
<template>
    <div class="container">
        <router-view></router-view>
        <rd-modal></rd-modal>
        <rd-notification></rd-notification>
        <rd-preview></rd-preview>
    </div>
</template>
<script>
import {
    rdModal,
    rdNotification,
    rdPreview
} from '../src/components/index'

export default {
    created () {
        this.$Radon.setRoot(this)
    },
    components: {
        rdModal,
        rdNotification,
        rdPreview
    }
}
</script>

```
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'

export default {
    components: {
        Mark
    }
}
</script>