<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Radon UI

> 一个用于企业级后台产品开发的简洁易用的Vue组件库

## 特性

- 基于 Vue 开发的高质量UI组件
- 基于 npm + webpack + ES6 + postcss开发
- 数据驱动，简单易使用

## 示例

```html
<template>
    <div class=customer>
        <rd-date-picker :date=startDate></rd-date-picker>
    </div>
</template>

<script>
    import 'radon-ui/dist/index.css'
    import { rdDatePicker } from 'radon-ui'
    export default {
        data () {
            return {
                startDate: {
                    value: ''
                }
            }
        },
        components: {
            rdDatePicker
        }
    }
</script>

```

## 版本

> 开发中 alpha 1


## 浏览器支持

> chrome


## 如何贡献

 我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](https://github.com/luojilab/radon-ui/pulls)，或者给我们[提问](https://github.com/luojilab/radon-ui/issues)。


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