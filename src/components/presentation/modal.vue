<style>
    .radon-modal-mask {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #373737;
        background-color: rgba(55,55,55,.6);
        height: 100%;
        z-index: 990;
        filter: alpha(opacity=50);
    }
    .radon-modal-wrapper {
        position: fixed;
        overflow: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        -webkit-overflow-scrolling: touch;
        outline: 0;
    }
    .radon-modal {
        position: relative;
        width: auto;
        margin: 0 auto;
        top: 100px;
        width: 30rem;
        background-color: #fff;
        border-radius: .25rem;
    }
    .radon-modal-header {
        font-size: 1.2rem;
        padding: 1rem 1rem;
        border-bottom: 1px solid #f3f3f3;
        color: #545454;
    }
    .radon-modal-body {
        padding: 1rem;
        border-bottom: 1px solid #f3f3f3;
        min-height: 7rem;
    }
    .radon-modal-footer {
        display: flex;
        justify-content: flex-end;
        padding: .5rem 1rem;
    }
    .radon-modal-footer .radon-btn {
        margin-left: .5rem;
    }
    .radon-modal-header-close {
        font-size: 1rem;
        position: absolute;
        right: 1rem;
    }
</style>
<template>
    <div class="radon-modal-container" v-show="modal.show">
        <div class="radon-modal-mask"></div>
        <div class="radon-modal-wrapper">
            <div class="radon-modal">
                <div class="radon-modal-header">
                    <i 
                        class="radon-modal-header-close ion-close-round"
                        @click="cancel"
                    ></i>
                    <span class="radon-modal-title">
                        {{modal.title}}
                    </span>
                </div>
                <div class="radon-modal-body">
                    {{modal.content}}
                </div>
                <div class="radon-modal-footer">
                    <radon-button @click="cancel">取消</radon-button>
                    <radon-button type="primary" @click="confirm">确定</radon-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import radonButton from '../basic/button.vue'
export default {
    data () {
        return {
            modal: {
                show: true,
                title: 'here is title',
                content: 'zhelasnkasnfsdksjd',
                cancel: () => {},
                confirm: () => {}
            }
        }
    },
    components: {
        radonButton
    },
    methods: {
        cancel () {
            if (this.modal.candel) {
                this.modal.cancel()
            }
            this.modal.show = false
        },
        confirm () {
            if (this.modal.confirm) {
                this.modal.confirm()
            }
            this.modal.show = false
        }
    }
}
</script>