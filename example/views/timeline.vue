<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Switch 开关

## 代码
```javascript
export default {
    data () {
        return {
            timeline: [{
                icon: 'ion-alert-circled',
                color: '#2db7f5',
                text: '创建服务现场 2015-09-01'
            },
            {
                color: '#2db7f5',
                text: '创建服务现场 2015-09-01'
            },
            {
                color: 'red',
                text: '创建服务现场 2015-09-01'
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
import mark from './mark.vue'
import {
    rdTimeline
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {
            timeline: [{
                icon: 'ion-alert-circled',
                color: '#2db7f5',
                text: '创建服务现场 2015-09-01'
            },
            {
                color: '#2db7f5',
                text: '创建服务现场 2015-09-01'
            },
            {
                color: 'red',
                text: '创建服务现场 2015-09-01'
            }]
        }
    },
    components: {
        rdTimeline,
        mark
    }
}
</script>