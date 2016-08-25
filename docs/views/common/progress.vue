<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Progress 进度条
 > 展示操作的当前进度。
* 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时
* 当需要显示一个操作完成的百分比时。

## 示例

可以尝试点击progress
        </textarea>
    </mark>
    <p>
         <rd-progress @click="startProgress(progressCommon1)" :progress="progressCommon1"></rd-progress>
    </p>
    <p>
         <rd-progress @click="startProgress(progressCommon4)" :progress="progressCommon4"></rd-progress>
    </p>
    <p>
         <rd-progress @click="startProgress(progressCommon5)" :progress="progressCommon5"></rd-progress>
    </p>
    <p>
        <rd-progress @click="startProgress(progressSmall)" :progress="progressSmall"></rd-progress>
    </p>
    <p>
        <rd-progress-circle @click="startProgress(progressCircle1)" :progress="progressCircle1"></rd-progress-circle>
        <rd-progress-circle @click="startProgress(progressCircle2)" :progress="progressCircle2"></rd-progress-circle>
        <rd-progress-circle @click="startProgress(progressCircle3)" :progress="progressCircle3"></rd-progress-circle>
        <rd-progress-circle @click="startProgress(progressCircle4)" :progress="progressCircle4"></rd-progress-circle>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

### progressBar
```html
<rd-progress @click="startProgress(progressCommon)" :progress="progressCommon"></rd-progress>
```

```javascript
progressCommon: {
    percent: 50, // Number 0-100
    options: {
        color: '#2db7f5', String any color string
        size: 'common', String ['common' , 'small']
        state: 'loading' // String ['info', 'sucess', 'loading', 'warning', 'failed']
    }
}
```

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| percent        | Number       | 进度百分比     |
| options.color  | String       | 颜色值         |
| options.size   | String       | 尺寸 'common' , 'small'|
| options.state  | String       | 进度状态 'info', 'sucess', 'loading', 'warning', 'failed'|


### progressCircle
```
<rd-progress-circle @click="startProgress(progressCircle)" :progress="progressCircle"></rd-progress-circle>
```
```
progressCircle: {
    percent: 50, // Number 0-100
    options: {
        color: '#2db7f5', String any color string
        size: 'common', String ['common' , 'small']
        state: 'loading' // String ['success', 'loading', 'failed'],
        /**
            format center text
            @param percent :Number
            return String
        **/
        format: function (percent) {
            return percent + '%'
        }
    }
}
```

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| percent        | Number       | 进度百分比     |
| options.color  | String       | 颜色值         |
| options.size   | String       | 尺寸 'common' , 'small'|
| options.state  | String       | 进度状态 'info', 'sucess', 'loading', 'warning', 'failed'|
| options.format | Function     | 进度格式化，入参为当前百分度|
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdProgress,
    rdProgressCircle
} from 'radon-ui'

export default {
    data () {
        return {
            progressCommon1: {
                percent: 10,
                options: {
                    color: '#2db7f5',
                    size: 'common',
                    state: 'loading'
                }
            },
            progressCommon4: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'common',
                    state: 'failed'
                }
            },
            progressCommon5: {
                percent: 100,
                options: {
                    color: '#2db7f5',
                    size: 'common',
                    state: 'success'
                }
            },
            progressSmall: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'small',
                    state: 'loading'
                }
            },
            progressCircle1: {
                percent: 10,
                options: {
                    color: '#2db7f5',
                    state: '',
                    format: function (percent) {
                        return percent + '%'
                    }
                }
            },
            progressCircle2: {
                percent: 50,
                options: {
                    color: '#87d068',
                    state: '',
                    format: function (percent) {
                        return percent + '%'
                    }
                }
            },
            progressCircle3: {
                percent: 100,
                options: {
                    state: 'failed',
                    format: function (percent) {
                        return percent + '%'
                    }
                }
            },
            progressCircle4: {
                percent: 30,
                options: {
                    size: 'small',
                    state: '',
                    format: function (percent) {
                        return percent + '%'
                    }
                }
            }
        }
    },
    components: {
        rdProgress,
        rdProgressCircle,
        Mark
    },
    methods: {
        startProgress (progress) {
            progress.percent = 0
            progress.options.state = ''
            let timer = setInterval(() => {
                if (progress.percent < 100) {
                    progress.percent++
                } else {
                    if (Math.random() * 2 < 1) {
                        progress.options.state = 'failed'
                    } else {
                        progress.options.state = 'success'
                    }
                    clearInterval(timer)
                }
            }, 50)
        }
    }
}
</script>