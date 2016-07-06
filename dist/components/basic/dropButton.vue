
<template>
    <button class="rd-dropbtn" @click="toggle">
        <span class="rd-dropbtn-text">{{text}}</span>
        <i class="ion-ios-arrow-down rd-dropbtn-icon"></i>
        <div class="rd-dropbtn-list" v-show="state.show">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    data () {
        return {
            text: '操作',
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
            e.stopPropagation()
            e.preventDefault()
            this.state.show = !this.state.show
        }
    }
}
</script>