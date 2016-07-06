

<template>
    <div class="rd-preview-container" v-show="preview.show">
        <div class="rd-preview-wrapper">
            <i class="ion-close-round rd-preview-close" @click="close"></i>
            <img class="rd-preview-img" v-if="preview.current.src" :src="preview.current.src" :alt="preview.current.title">
            <div class="rd-preview-title">
                {{preview.current.title}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            preview: Object
        },
        ready () {
            window.document.body.addEventListener('click', this.leave, false)
        },
        beforeDestroy () {
            window.removeEventListener('click', this.leave)
        },
        methods: {
            leave (e) {
                if (e.path.indexOf(this.$el) === -1) {
                    this.close()
                }
            },
            close () {
                this.preview.show = false
            }
        }
    }
</script>