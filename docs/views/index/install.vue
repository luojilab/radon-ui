<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# 安装

## 使用 npm 安装

推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
可以通过 npm 直接安装到项目中，使用 import 或 require 进行引用。

```
npm install radon-ui
```

### 基本组件的使用


在根组件中引入 RadonUI 的样式文件

```html
<style src="radon-ui/dist/static/css/dist.css"></style>
```

引入 `rdDatepicker` 日历组件并局部注册并定义日历组件的数据对象及配置

```javascript
import { rdDatepicker } from 'radon-ui'

export default {
    data () {
        return {
            datePicker: {
                value: '',
                options: {
                    quickClose: true,
                    format: 'YYYY/MM/DD'
                }
            }
        }
    },
    components: {
        rdDatepicker
    }
}
```

在模板中任意位置放置日历组件并使用 `v-bind` 语法将数据动态绑定 `date` 属性上。

```html
<template>
    <div class="container">
        <rd-datepicker :date="datePicker"></rd-datepicker>
    </div>
</template>
```


### 全局组件的使用


先在项目的入口文件中引入 RadonUI 的全局组件安装方法。

```javascript
// main.js
import Vue from 'vue'
import { RadonInstall } from 'radon-ui'

Vue.use(RadonInstall, {
    Modal: true,
    Notification: true,
    LoadingBar: true,
    Preview: true
})
```

推荐在 Vue 的根实例中放置全局组件的位置

```html
<!-- template -->
<template>
    <div class="container">
        <router-view></router-view>
        <!-- radon global components -->
        <rd-modal></rd-modal>
        <rd-notification></rd-notification>
        <rd-loadingbar></rd-loadingbar>
        <rd-preview></rd-preview>
    </div>
</template>
```

可以在任何组件中调用相应的全局组件的实例方法

```javascript
// any vue components
methods: {
    someAction () {
        // 生成系统通知
        this.$Notification.success('编辑成功', '', 5000)
    },
    open () {
        // 确认弹窗
        this.$Modal.create(
            '这里是标题',
            '这里应该说点什么',
            () => {
                // confirm callback
            },
            () => {
                // cancel callback
            }
        )
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

export default {
    components: {
        Mark
    }
}
</script>