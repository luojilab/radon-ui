<style>
@import '../../css/index';
.rd-textfield-input {
    font-size: .9rem;
    line-height: 1.7rem;
    color: #666;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: .1rem .5rem;
    width: 100%;
    outline: none;
    box-sizing: border-box;
}
.rd-textfield-input:focus, .rd-textfield-input:hover {
    border-color: #57c5f7;
}
.rd-textfield-wrapper {
    position: relative;
    width: 100%;
    &.loading {
        .rd-textfield-icon {
            animation: loading 1s infinite linear;
            color: #797979;
        }
    }
    &.warning {
        .rd-textfield-icon {
            color: #fa0;
        }
        .rd-textfield-input {
            border-color: #fa0;
        }
    }
    &.failed {
        .rd-textfield-icon {
            color: #f50;
        }
        .rd-textfield-input {
            border-color: #f50;
        }
    }
    &.success {
        .rd-textfield-input {
            border: 1px solid #87d068;
        }
        .rd-textfield-icon {
            color: #87d068;
        }
    }
    &.info {
        .rd-textfield-input {
            border: 1px solid #2db7f5;
        }
        .rd-textfield-icon {
            color: #2db7f5;
        }
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
.rd-textfield-icon {
    display: inline-block;
    position: absolute;
    right: .5rem;
    top: 50%;
    margin-top: -.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 1rem;
}
.rd-textfield-tip {
    position: absolute;
    left: 0;
    bottom: -1rem;
    font-size: .8rem;
    line-height: .8rem;
}
</style>
<template>
    <div 
        class="rd-textfield-wrapper"
        :class="{
        'loading': textState === 'loading',
        'warning': textState === 'warning',
        'failed': textState === 'failed',
        'info': textState === 'info',
        'success': textState === 'success'
     }"
    >
        <input 
            :type="type" 
            class="rd-textfield-input" 
            v-model="textfield.value" 
            :placeholder="textfield.placeHolder"
            @change="changing"
            @input="inputing"
        >
        <span class="rd-textfield-tip" v-if="textfield.tip">{{textfield.tip}}</span>
        <i class="rd-textfield-icon" :class="textIcon"></i>
    </div>
</template>
<script>
import { ICON_MAP } from '../utils'
export default {
    props: {
        textfield: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            default () {
                return 'text'
            }
        },
        bind: String,
        input: Function,
        change: Function
    },
    computed: {
        textState () {
            if (this.textfield.state) {
                return this.textfield.state
            }
            return 'default'
        },
        textIcon () {
            let classList = {}
            classList[ICON_MAP[this.textState]] = true
            return classList
        }
    },
    methods: {
        changing () {
            if (this.change) {
                this.change(this.textfield)
            }
        },
        inputing () {
            console.log(typeof this.bind)
            if (typeof this.bind !== undefined) {
                this.bind = this.textfield.value
            }
            if (this.input) {
                this.input(this.textfield)
            }
        }
    }
}
</script>