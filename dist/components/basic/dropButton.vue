
<template>
    <button 
        class="rd-dropbtn rd-btn"
        @click="toggle"
        :class="classList"
    >
        <span class="rd-dropbtn-text">{{text}}</span>
        <i class="ion-ios-arrow-down rd-dropbtn-icon"></i>
        <div class="rd-dropbtn-list" v-show="state.show" transition="fade-in-down">
            <span class="ion-arrow-up-b rd-box-arrow-icon"></span>
            <slot></slot>
        </div>
    </button>
</template>
<script>
import {
    catIn
} from '../utils'

export default {
    props: {
        text: {
            type: String,
            default () {
                return '操作'
            }
        },
        type: {
            type: String,
            default () {
                return 'default'
            }
        },
        disabled: {
            type: Boolean,
            default () {
                return false
            }
        }
    },
    data () {
        return {
            state: {
                show: false
            }
        }
    },
    computed: {
        classList () {
            let list = []
            if (this.type) {
                list.push(this.type)
            }

            if (this.disabled) {
                list.push('rd-btn-disabled')
            }
            return list
        }
    },
    ready () {
        window.document.body.addEventListener('click', this.leaveClose)
    },
    mounted () {
        window.document.body.addEventListener('click', this.leaveClose)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.leaveClose)
    },
    methods: {
        leaveClose (e) {
            if (!this.state.show) return
            if (!catIn(e.target, this.$el)) {
                this.state.show = false
            }
        },
        toggle (e) {
            if (this.disabled) return
            this.state.show = !this.state.show
        }
    }
}
</script>