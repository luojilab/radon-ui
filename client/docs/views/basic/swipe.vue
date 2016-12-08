<style>
.rd-swipe-item-1 {
    background-image: url(http://covteam.u.qiniudn.com/test15.jpg?imageView2/1/w/600/h/400)
}
.rd-swipe-item-2 {
    background-image: url(http://covteam.u.qiniudn.com/test22.jpg?imageView2/1/w/600/h/400)
}
.index-text {
    color: #fff;
}
.swipe-small {
    width: 10rem;
    height: 6rem;
}
.swipe-small .rd-swipe-item {
    width: 100%;
}
</style>
<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# 轮播

### 示例
    </rd-mark>
    <rd-swipe>
        <div class="rd-swipe-item">
            <span class="index-text">1</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">2</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">3</span>
        </div>
        <div class="rd-swipe-item">
            <span class="index-text">4</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">5</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">6</span>
        </div>
    </rd-swipe>
    <rd-swipe class="swipe-small">
        <div class="rd-swipe-item">
            <span class="index-text">1</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">2</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">3</span>
        </div>
        <div class="rd-swipe-item">
            <span class="index-text">4</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">5</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">6</span>
        </div>
    </rd-swipe>
    <rd-mark>
### 代码
```html
{{code.one}}
```

### API

`props`：

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| text           | String       | 显示文字       |
| type           | String       | 状态 （primary， info, warning, success, danger）|
| disabled       | Bolean       | 可用状态         |


`slot`：

可以在 `{{code.two}}` 标签中放置任意数量的 `{{code.three}}`
    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdSwipe
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: `<rd-drop-button text="操作">
    <rd-button>编辑</rd-button>
    <rd-button>审核</rd-button>
    <rd-button>删除</rd-button>
</rd-drop-button>`,
two: `<rd-drop-button></rd-drop-button>`,
three: `<rd-button></rd-button>`
            }
        }
    },
    components: {
        rdSwipe,
        rdMark
    }
}
</script>