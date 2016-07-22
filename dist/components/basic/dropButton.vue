
<template>
    <button 
        class="rd-dropbtn"
        @click="toggle"
        :class="{
            'rd-dropbtn-primary' : type === 'primary',
            'rd-dropbtn-default' : type === 'default',
            'rd-dropbtn-ghost'   : type === 'ghost',
            'rd-dropbtn-disabled': disabled
        }"
    >
        <span class="rd-dropbtn-text">{{text}}</span>
        <i class="ion-ios-arrow-down rd-dropbtn-icon"></i>
        <div class="rd-dropbtn-list" v-show="state.show">
            <slot></slot>
        </div>
    </button>
</template>
<script>
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
    ready () {
        window.document.body.addEventListener('click', this.leaveClose)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.leaveClose)
    },
    methods: {
        leaveClose (e) {
            if (!this.state.show) return
            if (e.path.indexOf(this.$el) === -1) {
                this.state.show = false
            }
        },
        toggle (e) {
            if (this.disabled) return
            e.stopPropagation()
            e.preventDefault()
            this.state.show = !this.state.show
        }
    }
}
</script>