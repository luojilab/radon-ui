<style>
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
    &.disabled .rd-textfield-input {
        color: #888888;
        background-color: #f9f9f9;
        border-color: #e7e7e7;
    }
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
    &.inline {
        display: inline-block;
        width: auto;
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
        :class="[textState, { inline: textfield.inline }, { disabled: textfield.disabled }]"
    >
        <input 
            :type="type" 
            class="rd-textfield-input" 
            v-model="textfield.value" 
            :placeholder="textfield.placeHolder"
            @change="changAction"
            @input="inputAction"
            @blur="blurAction"
            :disabled="textfield.disabled"
            :maxlength="textfield.maxLength"
        >
        <span class="rd-textfield-tip" v-if="textfield.tip">{{textfield.tip}}</span>
        <i class="rd-textfield-icon" :class="textIcon"></i>
    </div>
</template>
<script>
import { ICON_MAP } from '../utils'

const TYPE_MAP = {
    Email: {
        reg: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i,
        state: 'warning',
        tip: '请输入正确的邮箱地址'
    },
    Phone: {
        reg: /1[3-9][0-9]{9}$/,
        state: 'warning',
        tip: '请输入正确的手机号码'
    },
    Number: {
        reg: /^[0-9]*$/,
        state: 'warning',
        tip: '请输入数字'
    }
}

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
        sync: Function,
        limit: {
            type: Object,
            default () {
                return {
                    length: 0,
                    type: null
                }
            }
        }
    },
    computed: {
        textState () {
            if (this.textfield.state) {
                return this.textfield.state
            }
            return 'default'
        },
        textIcon () {
            if (!ICON_MAP[this.textState]) return []

            let classList = []
            classList.push(ICON_MAP[this.textState])

            return classList
        }
    },
    methods: {
        blurAction () {
            this.$emit('blur', this.textfield.value, this)
        },
        changAction (e) {
            this.$emit('changing', this.textfield.value, this)
        },
        inputAction (e) {
            this.$emit('inputing', this.textfield.value, this)
            this.limitLen()
            this.limitType()
            if (!this.sync) return
            this.sync(this.textfield)
        },
        setState (state, tip) {
            this.textfield.state = state
            this.textfield.tip = tip
        },
        cleanState () {
            this.textfield.tip = ''
            this.textfield.state = 'default'
        },
        limitLen () {
            if (this.limit.max) {
                if (this.textfield.value.length > this.limit.max) {
                    return this.setState('warning', '输入最多' + this.limit.max + '字符')
                } else {
                    this.cleanState()
                }
            }
            if (this.limit.min) {
                if (this.textfield.value.length < this.limit.min) {
                    return this.setState('warning', '输入至少' + this.limit.min + '字符')
                } else {
                    this.cleanState()
                }
            }
        },
        numberCheck (val) {
            if (!val) return true
            let num = Number(val)
            return !Number.isNaN(num)
        },
        limitType () {
            if (!this.limit.type) return
            if (!this.limit.type === 'Length') return this.limitLen()
            if (!TYPE_MAP[this.limit.type]) return

            let TypeLimit = TYPE_MAP[this.limit.type]
            let tip = TypeLimit.tip
            let check = TypeLimit.reg.test(this.textfield.value)

            if (this.limit.type === 'Number') {
                check = this.numberCheck(this.textfield.value)
            }

            if (this.limit.tip) {
                tip = this.limit.tip
            }
            if (!check) {
                this.setState(TypeLimit.state, tip)
            } else {
                this.cleanState()
            }
        }
    }
}
</script>