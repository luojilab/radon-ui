<style>
@import '../../css/index';
@import '../../css/ionicicon';
.rd-btn {
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
    i,
    .rd-btn-loading {
        margin-right: .3rem;
    }
}
.rd-btn.default {
    color: #666;
    background-color: #fff;
    border-color: #d9d9d9;
}
.rd-btn.primary {
    color: #fff;
    background-color: #57c5f7;
    border-color: #57c5f7;
    &:hover,
    &:focus {
        background-color: #81d8ff;
        color: #fff;
    }
}
.rd-btn.ghost {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.rd-btn.warning {
    color: #fff;
    background-color: #fa0;
    border-color: #fa0;
    &:hover,
    &:focus {
        color: #fff;
        background-color: rgba(255, 170, 0, 0.7);
        border-color: #fa0;
    }
}
.rd-btn.danger {
    color: #fff;
    background-color: #f50;
    border-color: #f50;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #f50;
        background-color: rgba(255, 85, 0, 0.7);
    }
}
.rd-btn.success {
    background-color: #87d068;
    border-color: #87d068;
    color: #fff;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #87d068;
        background-color: rgba(135, 208, 104, 0.7);
    }
}
.rd-btn.info {
    color: #fff;
    border-color:#2db7f5;
    background-color: #2db7f5;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #2db7f5;
        background-color: rgba(45, 183, 245, 0.7);
    }
}
.rd-btn:focus, .rd-btn:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}
.rd-btn.rd-btn-small {
    padding: .2rem .3rem;
    min-width: initial;
    font-size: .8rem;
    line-height: 1rem;
    min-width: initial;
}
.rd-btn.rd-btn-large {
    padding: .2rem 1.5rem;
    font-size: 1.4rem;
}
.rd-btn.rd-btn-icon {
    width: 2rem;
    min-width: initial;
    border-radius: 50%;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
    i {
        margin-right: 0;
    }
}
@-webkit-keyframes loading {
  from {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  from {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    transform-origin: 50% 50%;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rd-btn-loading {
    display: inline-block;
    animation: loading 1s infinite linear;
}
.rd-btn.rd-btn-disabled {
    color: #c3c3c3;
    background: #ececec;
    border-color: #cecece;
    cursor: not-allowed;
    &:hover {
        color: #a7a7a7;
        background: #ececec;
        border-color: #d9d9d9;
    }
}
.rd-btn-icon-only {
    font-size: 1rem;
    line-height: 2rem;
    vertical-align: baseline;
}
</style>
<template>
    <button 
        class="rd-btn"
        :class="btnClass"
        :style="styleList"
    >
        <i class="rd-btn-icon-only" :class="iconClass" v-if="icon"></i>
        <span class="rd-btn-loading ion-load-a" v-if="loading && !icon"></span>
        <span v-if="!icon">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: () => {
                return 'default'
            }
        },
        size: {
            type: String,
            default: () => {
                return 'default'
            }
        },
        loading: {
            type: Boolean,
            default () {
                return false
            }
        },
        fontColor: {
            type: String,
            default () {
                return ''
            }
        },
        icon: {
            type: String,
            default () {
                return ''
            }
        },
        color: {
            type: String,
            default () {
                return ''
            }
        },
        disabled: {
            type: Boolean,
            default () {
                return false
            }
        }
    },
    computed: {
        iconClass () {
            let list = []
            if (!this.icon) return list
            list.push(this.icon)
            return list
        },
        btnClass () {
            let list = []
            switch (this.type) {
            case 'primary':
                list.push('primary')
                break
            case 'default':
                list.push('default')
                break
            case 'ghost':
                list.push('ghost')
                break
            case 'success':
                list.push('success')
                break
            case 'info':
                list.push('info')
                break
            case 'warning':
                list.push('warning')
                break
            case 'danger':
                list.push('danger')
                break
            }

            switch (this.size) {
            case 'small':
                list.push('rd-btn-small')
                break
            case 'large':
                list.push('rd-btn-large')
                break
            }

            if (this.icon) {
                list.push('rd-btn-icon')
            }
            if (this.disabled) {
                list.push('rd-btn-disabled')
            }
            return list
        },
        styleList () {
            let list = {}
            if (this.color) {
                list['background'] = this.color
            }
            if (this.fontColor) {
                list['color'] = this.fontColor
            }
            return list
        }
    }
}
</script>