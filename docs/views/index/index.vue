<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Radon UI

一个帮助你快速开发产品的Vue组件库，简洁好用，效率高，让你摆脱各种定制化的烦恼。

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

### 基本组件的使用


引入 `rdText` 输入框组件并局部注册并定义输入框组件的数据对象及配置

```javascript
import { rdText } from 'radon-ui'

export default {
    data () {
        return {
            test: {
                value: '',
                placeHolder: '请输入',
                state: 'success',
                tip: '',
                inline: true
            }
        }
    },
    components: {
        rdText
    }
}
```

在模板中任意位置放置日历组件并使用 `v-bind` 语法将数据动态绑定 `textfield` 属性上。

```html
<template>
    <div class="container">
         <rd-text :textfield="test"></rd-text>
    </div>
</template>
```

我们上面定义的组件：
        </textarea>
    </mark>
    <p>
        <rd-text :textfield="test"></rd-text>
    </p>
    <mark>
        <textarea class="ex-mark-text">

## 版本

V 0.1.5


## 浏览器支持

Chrome Safari


## 如何贡献

 我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](https://github.com/luojilab/radon-ui/pulls)，或者给我们[提问](https://github.com/luojilab/radon-ui/issues)。
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import { rdText } from 'radon-ui'

export default {
    data () {
        return {
            test: {
                value: '',
                placeHolder: '请输入',
                state: 'success',
                tip: '',
                inline: true
            }
        }
    },
    components: {
        Mark,
        rdText
    }
}
</script>