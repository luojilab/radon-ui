
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