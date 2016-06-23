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
         <radon-progress @click="startProgress(progressCommon)" :progress="progressCommon"></radon-progress>
    </p>
    <p>
        <radon-progress @click="startProgress(progressSmall)" :progress="progressSmall"></radon-progress>
    </p>
    <p>
        <randon-progress-circle @click="startProgress(progressCircle)" :progress="progressCircle"></randon-progress-circle>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## API

### progressBar
```html
<radon-progress @click="startProgress(progressCommon)" :progress="progressCommon"></radon-progress>
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
### progressCircle
```
<randon-progress-circle @click="startProgress(progressCircle)" :progress="progressCircle"></randon-progress-circle>
```
```
progressCircle: {
    percent: 50, // Number 0-100
    options: {
        color: '#2db7f5', String any color string
        size: 'common', String ['common' , 'small']
        state: 'loading' // String ['info', 'sucess', 'loading', 'warning', 'failed'],
        /**
            format center text
            @param percent :Number
            return String
        **/
        format: function (percent) {
            return percent % 10 + '折'
        }
    }
}
```
## 代码
```javascript
export default {
    data () {
        return {
            progressCommon: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'common',
                    state: 'loading'
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
            progressCircle: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'small',
                    state: '',
                    format: function (percent) {
                        return percent % 10 + '折'
                    }
                }
            }
        }
    },
    components: {
        radonProgress,
        randonProgressCircle,
        mark
    },
    methods: {
        startProgress (progress) {
            progress.percent = 0
            progress.options.state = ''
            let timer = setInterval(() => {
                if (progress.percent &lt; 100) {
                    progress.percent++
                } else {
                    if (Math.random() * 2 &lt; 1) {
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
```
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    radonProgress,
    randonProgressCircle
} from '../../src/components/index'

export default {
    data () {
        return {
            progressCommon: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'common',
                    state: 'loading'
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
            progressCircle: {
                percent: 50,
                options: {
                    color: '#2db7f5',
                    size: 'small',
                    state: '',
                    format: function (percent) {
                        return percent % 10 + '折'
                    }
                }
            }
        }
    },
    components: {
        radonProgress,
        randonProgressCircle,
        mark
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