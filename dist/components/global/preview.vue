

<template>
    <div class="rd-preview-wrapper" v-show="preview.show">
        <div class="rd-preview-close" @click="close">
            <i class="ion-close-round rd-preview-close-icon" ></i>
        </div>
        <img 
            class="rd-preview-img" 
            v-if="preview.current.src" 
            :style="getPosition"
            :src="preview.current.src" 
            :alt="preview.current.title"
        >
        <div class="rd-preview-title">
            {{preview.current.title}}
            {{preview.current.index + '/' + preview.list.length}}
        </div>
        <div class="rd-preview-nav-left" @click="preAction">
            <span class="ion-ios-arrow-left rd-preview-nav-arrow"></span>
        </div>
        <div class="rd-preview-nav-right" @click="nextAction">
            <span class="ion-ios-arrow-right rd-preview-nav-arrow"></span>
        </div>
    </div>
</template>

<script>
import { catIn } from '../utils'

const _ = {
    on (type, handler) {
        window.addEventListener(type, handler, false)
    },
    off (type, handler) {
        window.removeEventListener(type, handler)
    }
}

export default {
    name: 'Preview',
    computed: {
        preview () {
            return window.RADON_EVENT_BUS.RADON_PREVIEW
        },
        getPosition () {
            let current = window.globalVm.RADON_PREVIEW.current
            if (current.src) {
                let naturalWH = current.naturalWidth / current.naturalHeight
                let windowWH = window.innerWidth / window.innerHeight

                if (naturalWH > windowWH) {
                    return {
                        width: '100%',
                        height: 'initial',
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        margin: 'auto'
                    }
                } else {
                    return {
                        height: '100%'
                    }
                }
            }
            return {}
        }
    },
    data () {
        return {
            $previewImg: null,
            $box: null,
            marginTop: 50
        }
    },
    mounted () {
        this.$previewImg = this.$el.getElementsByClassName('rd-preview-img')[0]
        _.on('click', this.leave)
    },
    ready () {
        this.$previewImg = this.$el.getElementsByClassName('rd-preview-img')[0]
        _.on('click', this.leave)
    },
    beforeDestroy () {
        _.off('click', this.leave)
    },
    methods: {
        leave (e) {
            if (!catIn(e.target, this.$el)) {
                this.close()
            }
        },
        close () {
            this.preview.show = false
        },
        preAction () {
            let index = this.preview.list.indexOf(this.preview.current)
            if (index === 0) return
            index--
            this.preview.current = this.preview.list[index]
        },
        nextAction () {
            let index = this.preview.list.indexOf(this.preview.current)
            if (index === this.preview.list.length - 1) return
            index++
            this.preview.current = this.preview.list[index]
        }
    }
}
</script>