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
    color: #666;
    background-color: #fff;
    border-color: #d9d9d9;
    .rd-dropbtn-icon {
        margin-left: .3rem;
    }
}
.rd-dropbtn-primary {
    color: #fff;
    background-color: #57c5f7;
    border-color: #57c5f7;
}
.rd-dropbtn-ghost {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.rd-dropbtn:focus, .rd-dropbtn:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}
.rd-dropbtn.rd-dropbtn-primary:hover,
.rd-dropbtn.rd-dropbtn-primary:focus {
    background-color: #81d8ff;
    color: #fff;
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