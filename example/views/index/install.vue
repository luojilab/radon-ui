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

> Use basic component

```
// in customer.vue
import { rdDatePicker } from 'radon-ui'
```

> User global method

```javascript
// main.js
import Vue from 'vue'
import { RadonInstall } from 'radon-ui'

RadonInstall(Vue)
```

```html
<!-- set root Vue data & template -->
<template>
    <div class="container">
        <router-view></router-view>
        <radon-modal :modal="modal"></radon-modal>
        <rd-notification :notifications="Notifications"></rd-notification>
        <rd-preview :preview="preview"></rd-preview>
    </div>
</template>
<script>
import {
    radonModal,
    rdNotification
} from '../src/components/index'

export default {
    data () {
        return {
            Notifications: [],
            modal: {
                show: false,
                title: '',
                content: '',
                cancel: () => {},
                confirm: () => {}
            }
        }
    },
    created () {
        this.$Radon.setRoot(this)
    },
    components: {
        radonModal,
        rdNotification
    }
}
</script>

```

## 使用 git submodule

```
# install
git submodule add git@192.168.100.40:FE/radon-ui.git

# update
git submodule update
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