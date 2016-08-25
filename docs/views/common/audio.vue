<template>
<div class="ex-content">
    <h2></h2>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
# Audioplayer 音频播放器

## 示例
            </textarea>
        </mark>
        <p>
            <rd-audio :audio="audio"></rd-audio>
        </p>
        <mark>
            <textarea class="ex-mark-text">
## 用法
```html
<!-- template -->
<rd-audio :audio="audio"></rd-audio>
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
            </textarea>
        </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
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
        rdAudio,
        Mark
    }
}
</script>