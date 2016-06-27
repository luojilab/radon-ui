<style>
@import '../../css/index';
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
    background-color: #f7f7f7;
    border-color: #d9d9d9;
    i,
    .rd-btn-loading {
        margin-right: .3rem;
    }
}
.rd-btn-default {
    color: #666;
    background-color: #fff;
    border-color: #d9d9d9;
}
.rd-btn-primary {
    color: #fff;
    background-color: #57c5f7;
    border-color: #57c5f7;
}
.rd-btn-ghost {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.rd-btn:focus, .rd-btn:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}
.rd-btn.rd-btn-primary:hover,
.rd-btn.rd-btn-primary:focus {
    background-color: #81d8ff;
    color: #fff;
}
.rd-btn.rd-btn-small {
    padding: .2em .4rem;
    min-width: initial;
}
.rd-btn.rd-btn-large {
    padding: .3rem 1.5rem;
    font-size: 1.4rem;
}
.rd-btn.rd-btn-icon {
    width: 2rem;
    min-width: initial;
    border-radius: 50%;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
    background-color: #fff;
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
.rd-btn-disabled {
    color: #c3c3c3;
    background: #ececec;
    cursor: not-allowed;
}
.rd-btn-disabled:hover {
    color: #a7a7a7;
    background: #ececec;
    border-color: #d9d9d9;
}
</style>
<template>
    <button 
        class="rd-btn"
        :class="{
            'rd-btn-primary' : type === 'primary',
            'rd-btn-default' : type === 'default',
            'rd-btn-ghost'   : type === 'ghost',
            'rd-btn-icon'    : type === 'icon',
            'rd-btn-small'   : size === 'small',
            'rd-btn-large'   : size === 'large',
            'rd-btn-disabled': disabled
        }"
        :style="styleList"
    >
        <span class="rd-btn-loading ion-load-a" v-if="loading"></span>
        <span>
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
    methods: {
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