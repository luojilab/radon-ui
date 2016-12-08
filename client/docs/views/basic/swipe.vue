<style>
.ex-swiper {
    .rd-swipe-item-1 {
        background-image: url(http://covteam.u.qiniudn.com/test15.jpg?imageView2/1/w/600/h/400)
    }
    .rd-swipe-item-2 {
        background-image: url(http://covteam.u.qiniudn.com/test22.jpg?imageView2/1/w/600/h/400)
    }
    .index-text {
         color: #fff;
        font-size: 16px;
        position: absolute;
        bottom: .5rem;
        right: 1rem;
    }
    .swipe-small {
        width: 10rem;
        height: 6rem;
    }
    .swipe-small .rd-swipe-item {
        width: 100%;
    }
    .rd-swipe-item {
        position: relative;
    }
    .swipe-box {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
    }
}
</style>
<template>
<div class="ex-content ex-swiper">
    <div class="ex-card">
    <rd-mark>
# 轮播

### 示例
    </rd-mark>
    <rd-swipe>
        <div class="rd-swipe-item">
            <span class="index-text">index: 1</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">index: 2</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">index: 3</span>
        </div>
        <div class="rd-swipe-item">
            <span class="index-text">index: 4</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">index: 5</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">index: 6</span>
        </div>
    </rd-swipe>
    <div class="swipe-box">
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
    </div>
    <p>
        <rd-button @click="slideTo(0)">slide to 1</rd-button>
        <rd-button @click="slideTo(1)">slide to 2</rd-button>
        <rd-button @click="slideTo(2)">slide to 3</rd-button>
    </p>
    <rd-mark>
### 代码
```html
{{code.one}}
```

### API

`props`：swipe:Object

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| autoplay       | Number       | 自动播放切换时间 (ms)|


`event`：

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| change         | event       | 轮播切换hook |



`methods`：

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| turnTo         | function     | 入参 index: Number|
| stopAutoPlay   | function     |                 |
| startAutoPlay  | function     |                 |

    </rd-mark>
    </div>
</div>
</template>
<script>
import {
    rdMark
} from '../index'
import {
    rdSwipe,
    rdButton
} from 'radon-ui'

export default {
    data () {
        return {
            swipe: {
                autoplay: false
            },
            code: {
                one: `    <rd-swipe>
        <div class="rd-swipe-item">
            <span class="index-text">index: 1</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">index: 2</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">index: 3</span>
        </div>
        <div class="rd-swipe-item">
            <span class="index-text">index: 4</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">index: 5</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">index: 6</span>
        </div>
    </rd-swipe>`,
two: `<rd-drop-button></rd-drop-button>`,
three: `<rd-button></rd-button>`
            }
        }
    },
    components: {
        rdSwipe,
        rdMark,
        rdButton
    },
    methods: {
        slideTo (index) {
            this.$children.map(swipe => {
                if (swipe.turnTo) {
                    swipe.stopAutoPlay()
                    swipe.turnTo(index)
                }
            })
        }
    }
}
</script>