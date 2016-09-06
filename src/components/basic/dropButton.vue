<style>
@import '../../css/index';
.rd-dropbtn {
    position: relative;
    display: inline-block;
    .rd-dropbtn-icon {
        margin-left: .3rem;
    }
}
.rd-dropbtn-list {
    position: absolute;
    top: 2.5rem;
    left: 50%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding: 0 .5rem;
    box-shadow: 0 0 .5rem #dedede;
    transform: translateX(-50%);
    border-radius: .2rem;
    z-index: 2;
}
.rd-dropbtn-list>.rd-box-arrow-icon {
    position: absolute;
    color: #fff;
    top: -.9rem;
    margin-left: -.5rem;
    font-size: 1rem;
    left: 50%;
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
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }
}
.fade-in-down-transition {
  animation-duration: .3s;
  animation-fill-mode: both;
}
.fade-in-down-enter {
    animation-name: fadeInDown;
}
.fade-in-down-leave {
    animation-name: fadeOutUp;
}
</style>
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