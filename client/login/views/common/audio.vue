<template>
<div class="ex-content">
    <h2></h2>
    <div class="ex-card">
        <rd-mark>
# Audioplayer 音频播放器

## 示例
        </rd-mark>
        <p>
            <rd-audio :audio="audio"></rd-audio>
        </p>
        <rd-mark>
## 用法
```html
<!-- template -->
{{code.one}}
```
```
// script
import {
    rdAudio
} from 'radon-ui'

export default {
    data () {
        return {
            audio: {
                title: 'ninelie-Aimer',
                src: 'http://covteam.u.qiniudn.com/test2.mp3',
                poster: 'http://covteam.u.qiniudn.com/ka2.jpg',
                options: {
                    preload: false,
                    autoplay: false,
                    rate: 1,
                    loop: false,
                    volume: 0.5
                }
            }
        }
    },
    components: {
        rdAudio
    }
}
```
        </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdAudio
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: '<rd-audio :audio="audio"></rd-audio>'
            },
            audio: {
                title: 'ninelie-Aimer',
                src: 'http://covteam.u.qiniudn.com/test2.mp3',
                poster: 'http://covteam.u.qiniudn.com/ka2.jpg',
                options: {
                    preload: false,
                    autoplay: false,
                    rate: 1,
                    loop: false,
                    volume: 0.5
                }
            }
        }
    },
    components: {
        rdAudio,
        rdMark
    }
}
</script>