

<template>
    <div class="rd-preview-wrapper" v-show="preview.show">
        <div class="rd-preview-close" @click="close">
            <i class="ion-close-round rd-preview-close-icon" ></i>
        </div>
        <img class="rd-preview-img" v-if="preview.current.src" :src="preview.current.src" :alt="preview.current.title">
        <div class="rd-preview-title">
            {{preview.current.title}}
        </div>
        <div class="rd-preview-nav-left" @click="preAction">
            <i class="ion-ios-arrow-left rd-preview-nav-arrow"></i>
        </div>
        <div class="rd-preview-nav-right" @click="nextAction">
            <i class="ion-ios-arrow-right rd-preview-nav-arrow"></i>
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
            $box: null
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