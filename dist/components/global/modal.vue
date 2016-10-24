
<template>
    <div class="rd-modal-container" v-show="modal.show">
        <div class="rd-modal-mask"></div>
        <div class="rd-modal-wrapper"  @click="touchClose">
            <div 
                class="rd-modal" 
                v-show="modal.show" 
                transition="modal-fade-in-down"
                :class="{'large': modal.large }"
            >
                <div class="rd-modal-header">
                    <i 
                        class="rd-modal-header-close ion-close-round"
                        @click="cancel"
                    ></i>
                    <span class="rd-modal-title">
                        {{modal.title}}
                    </span>
                </div>
                <div class="rd-modal-body" v-if="!modal.rawContent">
                    {{modal.content}}
                </div>
                <div class="rd-modal-body" v-else v-html="modal.rawContent">
                </div>
                <div class="rd-modal-footer">
                    <rd-button 
                        v-show="modal.cancelButton.show" 
                        :type="modal.cancelButton.type" 
                        @click="cancel"
                    >{{modal.cancelButton.text}}</rd-button>
                    <rd-button 
                        v-show="modal.confirmButton.show"  
                        :type="modal.confirmButton.type" 
                        @click="confirm"
                    >{{modal.confirmButton.text}}</rd-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import rdButton from '../basic/button.vue'

import {
    catIn
} from '../utils'

export default {
    data () {
        return {
            $modal: null
        }
    },
    mounted () {
        this.$modal = this.$el.getElementsByClassName('rd-modal')[0]
    },
    ready () {
        this.$modal = this.$el.getElementsByClassName('rd-modal')[0]
    },
    computed: {
        modal () {
            return window.RADON_EVENT_BUS.RADON_MODAL
        }
    },
    components: {
        rdButton
    },
    methods: {
        touchClose (e) {
            if (!this.$modal) return
            if (!catIn(e.target, this.$modal)) {
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