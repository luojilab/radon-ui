<style>
@import '../../css/index';
.rd-modal-mask {
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
.rd-modal-wrapper {
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
.rd-modal {
    position: relative;
    width: auto;
    margin: 0 auto;
    top: 100px;
    width: 30rem;
    background-color: #fff;
    border-radius: .25rem;
}
.rd-modal-header {
    font-size: 1.2rem;
    padding: 1rem 1rem;
    border-bottom: 1px solid #f3f3f3;
    color: #545454;
}
.rd-modal-body {
    padding: 1rem;
    border-bottom: 1px solid #f3f3f3;
    min-height: 7rem;
}
.rd-modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: .5rem 1rem;
}
.rd-modal-footer .rd-btn {
    margin-left: .5rem;
}
.rd-modal-header-close {
    font-size: 1rem;
    position: absolute;
    right: 1rem;
}
@media screen and (max-width: 768px) {
    .rd-modal {
        width: 90%;
    }
    .rd-modal-body {
        min-height: 4rem;
    }
}
</style>
<template>
    <div class="rd-modal-container" v-show="modal.show">
        <div class="rd-modal-mask"></div>
        <div class="rd-modal-wrapper"  @click="touchClose">
            <div class="rd-modal">
                <div class="rd-modal-header">
                    <i 
                        class="rd-modal-header-close ion-close-round"
                        @click="cancel"
                    ></i>
                    <span class="rd-modal-title">
                        {{modal.title}}
                    </span>
                </div>
                <div class="rd-modal-body">
                    {{modal.content}}
                </div>
                <div class="rd-modal-footer">
                    <rd-button @click="cancel">取消</rd-button>
                    <rd-button type="primary" @click="confirm">确定</rd-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import rdButton from '../basic/button.vue'
export default {
    props: {
        modal: Object
    },
    components: {
        rdButton
    },
    methods: {
        touchClose (e) {
            if (e.target.classList[0] === 'rd-modal-wrapper') {
                this.cancel()
            }
        },
        cancel (e) {
            if (this.modal.cancel) {
                this.modal.cancel()
            }
            this.modal.show = false
        },
        confirm (e) {
            if (this.modal.confirm) {
                this.modal.confirm()
            }
            this.modal.show = false
        }
    }
}
</script>