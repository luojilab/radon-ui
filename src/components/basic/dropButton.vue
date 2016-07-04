<style>
@import '../../css/index';
.rd-dropbtn {
    position: relative;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: .3rem;
    font-size: .8rem;
    line-height: 1.5;
    min-width: 5rem;
    border-radius: 4px;
    transition: background 0.2s;
    outline: none;
    color: #fff;
    background-color: #57c5f7;
    border-color: #57c5f7;
    .rd-dropbtn-icon {
        margin-left: .3rem;
    }
}
.rd-dropbtn-list {
    position: absolute;
    top: 2rem;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding: 0 .5rem;
    box-shadow: 0 0 .8rem rgba(0, 0, 0, 0.35);
}
.rd-dropbtn-list .rd-btn {
    background: #fff;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    padding: .5rem .3rem;
}
.rd-dropbtn-list .rd-btn:last-child {
    border: none;
}
</style>
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