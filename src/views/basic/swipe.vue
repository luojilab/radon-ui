<style>
.contacts {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
}
.contact {
  color: #fff;
  font-size: 14px;
  width: 100%;
  line-height: 3rem;
  text-align: center;
  border-bottom: 2px solid rgba(0,0,0,0);
  cursor: pointer;
}
.contact.active {
  border-bottom: 2px solid #fff;
}
.swiper-box {
    height: 500px;
    width: 100%;
    margin: auto;
    background: #2196F3;
    padding: 1rem;
}
.swiper-box  .rd-swipe {
  height: 400px;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .swiper-box {
      height: 300px;
  }
  .swiper-box  .rd-swipe {
    height: 200px;
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
    <div class="swiper-box">
        <div class="contacts">
            <div 
              class="contact"
              :class="{ 'active': index === swipe.activeIndex }" 
              v-for="(contact, index) in contacts"
              @click="slideTo(index)"
            >
              {{contact.text}}
            </div>
        </div>
        <rd-swipe :swipe="swipe">
            <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
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
                activeIndex: 0
            },
            contacts: [{
                text: 'Page 1'
              }, {
                text: 'Page 2'
              }, {
                text: 'Page 3'
              }, {
                text: 'Page 4'
            }],
            imgs: [
                'http://covteam.u.qiniudn.com/test18.jpg',
                'http://covteam.u.qiniudn.com/test19.jpg',
                'http://covteam.u.qiniudn.com/test20.jpg',
                'http://covteam.u.qiniudn.com/test21.jpg'
            ],
            code: {
                one: `    <rd-swipe>
        <div class="rd-swipe-item rd-swipe-item-3">
            <span class="index-text">index: 1</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-1">
            <span class="index-text">index: 2</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-2">
            <span class="index-text">index: 3</span>
        </div>
        <div class="rd-swipe-item rd-swipe-item-3">
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