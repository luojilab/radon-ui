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
    position: fixed;
    width: 60rem;
    left: 50%;
    top: 0;
    margin-left: -30rem;
    background: #fff;
    padding: .25rem;
    height: 100%;
    box-sizing: border-box;
}
.rd-preview-close {
    position: absolute;
    right: .5rem;
    top: .5rem;
}
.rd-preview-img {
    height: 100%;
    width: 100%;
    max-width: 100%;
}
.rd-preview-close {
    position: absolute;
    right: .6rem;
    top: .5rem;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.54);
    color: #fff;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    line-height: 1.5rem;
    text-align: center;
}
.rd-preview-nav-left,
.rd-preview-nav-right {
    position: absolute;
    height: 100%;
    margin: .25rem;
    background: rgba(0, 0, 0, 0.36);
    width: 10rem;
    top: 0;
    color: #fff;
    opacity: 0;
    transition: opacity .2s;
    .rd-preview-nav-arrow {
        opacity: 0;
        transition: opacity .3s;
    }
    &:hover {
        opacity: 1;
        transition: opacity .2s;
        .rd-preview-nav-arrow {
            opacity: 1;
        }
    }
}
.rd-preview-nav-left {
    left: 0;
    .rd-preview-nav-arrow {
        left: 0;
        margin-left: 2rem;
    }
}
.rd-preview-nav-right {
    right: 0;
    .rd-preview-nav-arrow {
        right: 0;
        margin-right: 2rem;
    }
}
.rd-preview-nav-arrow {
    font-size: 5rem;
    position: absolute;
    top: 50%;
    margin-top: -2.5rem;
}
</style>

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