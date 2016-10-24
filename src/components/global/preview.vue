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
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.8);
    height: 100%;
    box-sizing: border-box;
    text-align: center;
}
.rd-preview-close {
    position: absolute;
    right: .5rem;
    top: .5rem;
}
.rd-preview-img {
    max-width: 100%;
    max-height: 100%;
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
    z-index: 2;
}
.rd-preview-nav-left,
.rd-preview-nav-right {
    position: absolute;
    height: 100%;
    margin: .25rem;
    width: 10rem;
    top: 0;
    color: #fff;
    transition: opacity .2s;
    .rd-preview-nav-arrow {
        transition: background .3s;
    }
    &:hover {
        opacity: 1;
        transition: opacity .2s;
        .rd-preview-nav-arrow {
            background: rgba(0, 0, 0, 0.53);
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
    font-size: 3rem;
    position: absolute;
    top: 50%;
    margin-top: -2.5rem;
    padding: 0 .5rem;
    background: rgba(0, 0, 0, 0);
    line-height: 2rem;
    border-radius: .2rem;
}
.rd-preview-title {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    color: #fff;
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    font-size: 2rem;
}

@media all and (max-width: 768px) {
    .rd-preview-wrapper {
        top: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        margin: 0;
        left: 0;
    }
    .rd-preview-nav-left,
    .rd-preview-nav-right {
        width: 5rem;
    }
    .rd-preview-nav-arrow {
        font-size: 2.5rem;
    }
    .rd-preview-nav-left .rd-preview-nav-arrow {
        margin-left: 0;
    }
    .rd-preview-nav-right .rd-preview-nav-arrow {
        margin-right: 0;
    }
}
</style>

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