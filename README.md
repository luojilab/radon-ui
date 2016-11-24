# Radon UI

> 一个帮助你快速开发产品的Vue组件库，简洁好用，效率高，让你摆脱各种定制化的烦恼。

## 特性

- 基于 Vue 开发的高质量UI组件
- 基于 npm + webpack + ES6 + postcss开发
- 数据驱动，简单易使用

## 安装

### 使用 npm 安装

推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
可以通过 npm 直接安装到项目中，使用 import 或 require 进行引用。

```
npm install radon-ui
```

## 使用

[RadonUI 在线文档](https://luojilab.github.io/radon-ui/)

### 基本组件的使用


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

Vue.use(RadonInstall)
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

## 版本

V 0.3.0


## 浏览器支持

Chrome Safari


## 如何贡献

 我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](https://github.com/luojilab/radon-ui/pulls)，或者给我们[提问](https://github.com/luojilab/radon-ui/issues)。
