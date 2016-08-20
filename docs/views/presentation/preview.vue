<style>
    .img-min {
        width: 10rem;
    }
</style>

<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Preview 图片预览

### 代码

```html
<img v-for="img in imgs" v-preview="img" :src="img">
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
## 示例

        </textarea>
    </mark>
        <p>
            <img class="img-min"  v-for="img in imgs" v-preview="img" :src="img">
        </p>
    </div>
</div>
</template>

<script>
import { Mark } from '../index'

export default {
    data () {
        return {
            imgs: ['http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png']
        }
    },
    components: {
        Mark
    }
}
</script>