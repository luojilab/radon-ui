<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Progress 进度条

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
                        return percent + '% off'
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
```
## 示例

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
                        return percent + '% off'
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