<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Timeline 时间轴

## 代码
```javascript
export default {
    template: '<rd-timeline :timeline="timeline"></rd-timeline>',
    data () {
        return {
            timeline: [{
                icon: 'ion-alert-circled',
                color: '#2db7f5',
                text: '连接服务器 2016-06-16 20:01:12'
            },
            {
                color: '#2db7f5',
                text: '准备上传文件 2016-06-16 20:01:13'
            },
            {
                color: 'red',
                text: '上传失败 2016-06-16 20:01:14'
            }]
        }
    },
    components: {
        rdTimeline
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <rd-timeline :timeline="timeline"></rd-timeline>
        </p>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdTimeline
} from 'radon-ui'

export default {
    data () {
        return {
            timeline: [{
                icon: 'ion-alert-circled',
                color: '#2db7f5',
                text: '连接服务器 2016-06-16 20:01:12'
            },
            {
                color: '#2db7f5',
                text: '准备上传文件 2016-06-16 20:01:13'
            },
            {
                color: 'red',
                text: '上传失败 2016-06-16 20:01:14'
            }]
        }
    },
    components: {
        rdTimeline,
        Mark
    }
}
</script>