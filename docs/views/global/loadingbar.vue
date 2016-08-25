<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# LoadingBar

### 示例

点击 Start 开始进入 loading
        </textarea>
    </mark>

    <p>
        <rd-button type="primary" @click="$Progress.start()">Start</rd-button>
    </p>
    <p>
        <rd-button type="success" @click="$Progress.finish()">Finish</rd-button>
    </p>
    <p>
        <rd-button type="danger" @click="$Progress.failed()">Failed</rd-button>
    </p>
    <mark>
        <textarea class="ex-mark-text">
### 安装

首先在项目的入口文件中引入 RadonUI, 调用 `Vue.use` 安装。

```javascript
// main.js
import RadonUI from 'radon-ui/install'

Vue.use(RadonUI, {
    LoadingBar: true
})
```

在根组件添加 `rd-loadingbar` 组件的位置


```
<!-- Vue root compoment template -->
<div id="app">
    <router-view></router-view>
    <rd-loadingbar></rd-loadingbar>
</div>
```

在异步请求代码中使用

```javascript
loadData () {
    this.$Progress.start()
    this.$http.get('/api/api/contracts/')
        .then(data => {
            this.$Progress.finish()
            console.log(data)
        })
        .catch(err => {
            this.$Progress.failed()
        })
}
```


在 Vue Router 中使用
```
router.beforeEach(function (transition) {
    transition.to.router.app.$Progress.start()
    transition.next()
})

router.afterEach((transition) => {
    transition.to.router.app.$Progress.finish()
})

```


        </textarea>
    </mark>
    </div>
</div>
</template>

<script>
import { Mark } from '../index'
import { rdButton } from 'radon-ui'

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
                'http://covteam.u.qiniudn.com/test21.jpg'
            ]
        }
    },
    components: {
        Mark,
        rdButton
    }
}
</script>