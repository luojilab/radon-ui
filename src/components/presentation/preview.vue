<style>
.rd-preview-container {
    display: inline-block;
    padding: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    width: 100%;
    height: 100%;
}
.rd-preview-wrapper {
    position: relative;
    display: inline-block;
    background: #fff;
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
    margin-top:10rem;
}
.rd-preview-close {
    position: absolute;
    right: .5rem;
    top: .5rem;
}
.rd-preview-img {
    max-width: 60rem
}
.rd-preview-close {
    position: absolute;
    right: .6rem;
    top: .5rem;
    line-height: 1rem;
    font-size: 1rem;
}
</style>

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