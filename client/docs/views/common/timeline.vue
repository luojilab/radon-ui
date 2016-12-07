<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Timeline 时间轴

## 代码
```javascript
export default {
    template: '{{code.one}}',
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
    </rd-mark>
        <p>
            <rd-timeline :timeline="timeline"></rd-timeline>
        </p>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdTimeline
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: `<rd-timeline :timeline="timeline"></rd-timeline>`
            },
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
        rdMark
    }
}
</script>