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
         <radon-progress @click="startProgress(progressCommon1)" :progress="progressCommon1"></radon-progress>
    </p>
    <p>
         <radon-progress @click="startProgress(progressCommon4)" :progress="progressCommon4"></radon-progress>
    </p>
    <p>
         <radon-progress @click="startProgress(progressCommon5)" :progress="progressCommon5"></radon-progress>
    </p>
    <p>
        <radon-progress @click="startProgress(progressSmall)" :progress="progressSmall"></radon-progress>
    </p>
    <p>
        <randon-progress-circle @click="startProgress(progressCircle1)" :progress="progressCircle1"></randon-progress-circle>
        <randon-progress-circle @click="startProgress(progressCircle2)" :progress="progressCircle2"></randon-progress-circle>
        <randon-progress-circle @click="startProgress(progressCircle3)" :progress="progressCircle3"></randon-progress-circle>
        <randon-progress-circle @click="startProgress(progressCircle4)" :progress="progressCircle4"></randon-progress-circle>
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
                        return percent + '%'
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