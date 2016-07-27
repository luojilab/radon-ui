

<template>
    <div class="rd-preview-wrapper" v-show="preview.show">
        <i class="ion-close-round rd-preview-close" @click="close"></i>
        <img class="rd-preview-img" v-if="preview.current.src" :src="preview.current.src" :alt="preview.current.title">
        <div class="rd-preview-title">
            {{preview.current.title}}
        </div>
        <div class="rd-preview-nav-left">
            <i class="ion-ios-arrow-left rd-preview-nav-arrow"></i>
        </div>
        <div class="rd-preview-nav-right">
            <i class="ion-ios-arrow-right rd-preview-nav-arrow"></i>
        </div>
    </div>
</template>

<script>
import { catIn } from '../utils'

export default {
    props: {
        preview: Object
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
        }
    }
}
</script>