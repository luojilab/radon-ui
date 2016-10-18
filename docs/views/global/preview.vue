<style>
    .doc-preview-imglist {
        display: flex;
        flex-wrap: wrap;
    }
    .doc-preview-imgbox {
        width: 10rem;
        height: 10rem;
        background-size: cover;
    }
</style>

<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Preview 图片预览

### 示例

可以尝试点击下面的图片
        </textarea>
    </mark>
    <div class="doc-preview-imglist">
        <div 
            v-for="img in imgs"
            v-preview="img" 
            class="doc-preview-imgbox" 
            :style="{ 'background-image':  'url(' + img + '?imageView2/1/w/100/h/100)'}"
        >
        </div>
    </div>
    <mark>
        <textarea class="ex-mark-text">
### 安装

首先在项目的入口文件中引入 RadonUI, 调用 `Vue.use` 安装。

```javascript
// main.js
import { RadonInstall } from 'radon-ui'

Vue.use(RadonInstall, {
    Preview: true
})
```

在根组件添加 `rd-preview` 组件的位置

```
<!-- Vue root compoment template -->
<div id="app">
    <router-view></router-view>
    <rd-preview></rd-preview>
</div>
```

对于所有图片都可以使用 `v-preview` 指令来绑定他们的预览功能

```html
<img v-for="img in imgs" v-preview="img" :src="img">

or

<div 
    v-for="img in imgs"
    v-preview="img" 
    class="doc-preview-imgbox" 
    :style="{ 'background-image':  'url(' + img + ')'}"
>
</div>
```

```javascript
export default {
    data () {
        return {
            imgs: ['http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png']
        }
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
    data () {
        return {
            imgs: [
                'http://covteam.u.qiniudn.com/test14.jpg',
                'http://covteam.u.qiniudn.com/test15.jpg',
                'http://covteam.u.qiniudn.com/test16.jpg',
                'http://covteam.u.qiniudn.com/test17.jpg',
                'http://covteam.u.qiniudn.com/test18.jpg',
                'http://covteam.u.qiniudn.com/test19.jpg',
                'http://covteam.u.qiniudn.com/test20.jpg',
                'http://covteam.u.qiniudn.com/test21.jpg',
                'http://covteam.u.qiniudn.com/test22.jpg',
                'http://covteam.u.qiniudn.com/test23.jpg'
            ]
        }
    },
    components: {
        Mark
    }
}
</script>