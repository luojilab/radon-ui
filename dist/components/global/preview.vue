

<template>
    <div class="rd-preview-wrapper" v-show="preview.show">
        <div class="rd-preview-close" @click="close">
            <i class="ion-close-round rd-preview-close-icon" ></i>
        </div>
        <img 
            v-el:preview-img
            class="rd-preview-img" 
            v-if="preview.current.src" 
            :style="{
                'margin-top': marginTop + 'px'
            }"
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

export default {
    computed: {
        preview () {
            return this.$root.RADON_PREVIEW
        }
    },
    data () {
        return {
            $box: null,
            marginTop: 50
        }
    },
    ready () {
        window.addEventListener('click', this.leave, false)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.leave)
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
        imgPosition () {
            if (!this.$els.previewImg || !this.$el) return
            this.$nextTick(() => {
                this.marginTop = 0.5 * (this.$el.offsetHeight - this.$els.previewImg.offsetHeight)
            })
        },
        preAction () {
            let index = this.preview.list.indexOf(this.preview.current)
            if (index === 0) return
            index--
            this.preview.current = this.preview.list[index]
            this.imgPosition()
        },
        nextAction () {
            let index = this.preview.list.indexOf(this.preview.current)
            if (index === this.preview.list.length - 1) return
            index++
            this.preview.current = this.preview.list[index]
            this.imgPosition()
        }
    }
}
</script>