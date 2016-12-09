<style>
.rd-upload-container {
    display: inline-block;
}
.rd-upload-wrapper {
}
.rd-upload-file {
    display: none;
}
.rd-upload-preview {
    display: flex;
}
.rd-upload-list-item {
    position: relative;
    width: 5rem;
    height: 8rem;
    margin: .5rem;
    &:hover {
        color: #57c5f7;
        .rd-upload-preview-action {
            opacity: 1;
            .rd-upload-close {
                display: inline;
            }
        }
    }
}
.rd-upload-list-item:first-child {
    margin-left: 0;
}
.rd-upload-preview-img-wrapper {
    display: inline-block;
    height: 5rem;
    width: 5rem;
    border: 1px solid #e0e0e0;
    border-radius: .4rem;
    padding: .5rem;
    box-sizing: border-box;
}
.rd-upload-preview-img {
    width: 100%;
    height: 100%;
    background-size: cover;
}
.rd-upload-preview-info {
    display: inline-block;
    vertical-align: top;
    font-size: .8rem;
    width: 100%;
    text-align: center;
    overflow: hidden;
}
.rd-upload-preview-info-title,
.rd-upload-preview-info-size {
    height: 1rem;
    overflow: hidden;
    text-align: center;
}
.rd-upload-preview-action {
    position: absolute;
    width: 100%;
    height: 5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.29);
    border-radius: .4rem;
    opacity: 0;
    transition: opacity .3s;
}
.rd-upload-close {
    display: none;
    color: #fff;
    font-size: 1.5rem;
    line-height: 5rem;
}
</style>
<template>
    <div class="rd-upload-container">
        <div class="rd-upload-wrapper">
            <div class="rd-upload-action">
                <input type="file" :accept="accept" @change="changeFile" class="rd-upload-file">
                <rd-button @click="touchUp">点击上传</rd-button>
            </div>
            <div class="rd-upload-preview">
                <div class="rd-upload-list-item" v-for="item in fileList">
                    <div class="rd-upload-preview-action">
                        <i @click="delFile(item)" class="ion-trash-b rd-upload-close"></i>
                    </div>
                    <div class="rd-upload-preview-img-wrapper">
                        <div class="rd-upload-preview-img" :style="{ 'background-image': 'url(' + item.src + ')' }" v-if="item.src"></div>
                    </div>
                    <div class="rd-upload-preview-info">
                        <div class="rd-upload-preview-info-title">
                            {{item.file.name}}
                        </div>
                        <div class="rd-upload-preview-info-size">
                            {{sizeCalc(item.file.size)}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import rdButton from '../basic/button.vue'

const imageType = /^image\//

export default {
    props: {
        accept: String
    },
    data () {
        return {
            $file: null,
            fileList: []
        }
    },
    ready () {
        this.$file = this.$el.getElementsByClassName('rd-upload-file')[0]
    },
    mounted () {
        this.$file = this.$el.getElementsByClassName('rd-upload-file')[0]
    },
    components: {
        rdButton
    },
    methods: {
        sizeCalc (size) {
            return Math.round(size / 10.24) / 100 + 'Kb'
        },
        touchUp (e) {
            if (this.$file) {
                this.$file.click()
            }
        },
        changeFile (e) {
            let previewUrl = ''
            let newItem = {}
            for (let i = 0, len = this.$file.files.length; i < len; i++) {
                previewUrl = ''
                if (imageType.test(this.$file.files[i].type)) {
                    previewUrl = window.URL.createObjectURL(this.$file.files[i])
                }
                newItem = {
                    src: previewUrl,
                    file: this.$file.files[i]
                }
                this.fileList.push(newItem)
                this.$emit('add', newItem, this.fileList)
            }
        },
        delFile (item) {
            this.$file.value = ''
            this.fileList.$remove(item)
            this.$emit('remove', item)
        }
    }
}
</script>