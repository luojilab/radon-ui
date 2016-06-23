<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Radon UI
 > 一个用于企业级后台产品开发的简洁易用的Vue组件库

## 特性
 * 基于 Vue 开发的高质量UI组件
 * 基于 npm + webpack + ES6 + postcss开发 

## 示例
```
// script
import { rdDatePicker } from './radon-ui'
import './radon-ui/dist/index.css'
data () {
    return {
        startDate: ''
    }
}
```
```
<!-- template -->
<div class="customer">
    <rd-date-picker :value="startDate"></rd-date-picker>
</div>
```

## 版本
 * 开发中 alpha 1

## 浏览器支持

 > chrome


 ## 如何贡献
 我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](http://gitlab.dev.didatrip.com/FE/radon-ui)，或者给我们[提问](http://gitlab.dev.didatrip.com/FE/radon-ui)。

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