
<template>
    <button 
        class="rd-dropbtn"
        @click="toggle"
        :class="classList"
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
    computed: {
        classList () {
            let list = []
            switch (this.type) {
            case 'primary':
                list.push('rd-dropbtn-primary')
                break
            case 'ghost':
                list.push('rd-dropbtn-ghost')
                break
            default:
                list.push('rd-dropbtn-primary')
            }

            if (this.disabled) {
                list.push('rd-dropbtn-disabled')
            }
            return list
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