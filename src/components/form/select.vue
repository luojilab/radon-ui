<style>
@import '../../css/_index.css';
.rd-select-container {
    position: relative;
    border: 1px solid $border-color-base;
    display: inline-block;
    min-width: 6rem;
    border-radius: $border-radius-base;
    height: 2rem;
    line-height: 2rem;
    padding: 0 2rem 0 .5rem;
    vertical-align: bottom;
    box-sizing: border-box;
    width: 100%;
}

.rd-select-container:hover {
    border: 1px solid $primary-color;
}

.rd-select-container.disabled {
    background: #f4f5f9;
    color: #666;
}

.rd-select-container.disabled:hover {
    border: 1px solid $border-color-base;
}

.rd-select-arrow {
    position: absolute;
    top: 0;
    right: .5rem;
    font-size: .4rem;
    transform: rotate(0);
    transition: transform 0.2s ease;
}

.rd-select-container.active .rd-select-options-container {
    display: initial;
    max-height: 20rem;
    overflow-y: auto;
    overflow-x: hidden;
}

.rd-select-container.active .rd-select-arrow {
    transform: rotate(180deg);
}

.rd-select-options-container {
    position: absolute;
    min-width: 6rem;
    padding: 0;
    top: 2.2rem;
    left: -1px;
    background-color: #fff;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    border-radius: 2px;
    max-height: 20rem;
    overflow-y: auto;
}

.rd-select-option {
    padding: 0 .5rem;
    font-size: .8rem;
    padding: .1rem .5rem;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .3s ease;
}

.rd-select-option.selected {
    background: #67cdfb;
    color: #fff;
}

.rd-select-option.disabled {
    background: #efefef;
    color: #b7b7b7;
    cursor: not-allowed;
}

.rd-select-option:hover {
    opacity: .7;
}

.rd-select-top .rd-select-options-container{
    bottom: 2rem;
    top: initial;
}

.rd-select-selected-value {
    position: relative;
    font-size: .8rem;
    line-height: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.rd-select-search-wrapper {
    width: 100%;
    box-sizing: border-box;
}

.rd-select-search-input {
    width: 100%;
    border: 0;
    opacity: .5;
    outline: none;
    padding: .5rem;
    line-height: .8rem;
    box-sizing: border-box;
}
@keyframes pickerFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -1rem, 0);
    transform: translate3d(0, -1rem, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes pickerFadeOutUp {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -1rem, 0);
    transform: translate3d(0, -1rem, 0);
  }
}
.picker-fade-in-down-transition {
  animation-duration: .2s;
  animation-fill-mode: both;
}
.picker-fade-in-down-enter {
    animation-name: pickerFadeInDown;
}
.picker-fade-in-down-leave {
    animation-name: pickerFadeOutUp;
}
</style>
<template>
    <div 
        class="rd-select-container"
        @click="showOption" 
        :class="{
            'rd-select-top': position === 'top',
            'disabled': select.disabled
        }"
    >
        <div class="rd-select-selected-value">
            <span>{{displayValue}}</span>
        </div>
        <span class="rd-select-arrow ion-chevron-down"></span>
        <div class="rd-select-options-container" v-show="show" transition="picker-fade-in-down">
            <div class="rd-select-search-wrapper" v-show="select.search">
                <input 
                    @focus="focusInput" 
                    @click="touchInput" 
                    @blur="leaveInput"
                    @change="changeInput"
                    type="text" 
                    v-model="search" 
                    placeholder="搜索" 
                    class="rd-select-search-input"
                >
            </div>
            <div 
                class="rd-select-option" 
                @click="setValue(option)" 
                v-for="option in list" 
                :class="{
                    'selected': option.selected,
                    'disabled': option.disabled
                }"
            >{{option.value}}</div>
        </div>
    </div>
</template>
<script>
import { catIn } from '../utils'

export default {
    props: {
        select: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            position: 'bottom',
            show: false,
            valueShow: true,
            search: '',
            display: ''
        }
    },
    computed: {
        list () {
            if (this.search) {
                const reg = new RegExp(this.search, 'g')
                let list = this.select.options.filter(item => {
                    return reg.test(item.value)
                })
                if (list.length === 0) {
                    return [{
                        selected: false,
                        disabled: true,
                        value: '无法找到',
                        id: ''
                    }]
                }
                return list
            }
            return this.select.options
        },
        displayValue () {
            if (this.select.multiple) {
                let list = []
                this.select.value.forEach(item => {
                    list.push(item.value)
                })
                return list.length === 1 ? list[0] : list.join(',')
            } else {
                return this.select.value.value
            }
        }
    },
    ready () {
        this.select.multiple = this.select.multiple || false
        window.addEventListener('click', this.hide, false)
        this.setDisplayValue(this.select.options)
    },
    mounted () {
        this.select.multiple = this.select.multiple || false
        window.addEventListener('click', this.hide, false)
        this.setDisplayValue(this.select.options)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.hide)
    },
    watch: {
        'select.options': {
            handler (options) {
                this.setDisplayValue(options)
            },
            deep: true
        }
    },
    methods: {
        hide (e) {
            if (!catIn(e.target, this.$el)) {
                this.show = false
                this.search = ''
            }
        },
        touchInput (e) {
            e.stopPropagation()
        },
        leaveInput (e) {
            this.valueShow = true
        },
        focusInput () {
            this.search = ''
            this.valueShow = false
        },
        changeInput (e) {
            e.stopPropagation()
        },
        setValue (option) {
            this.search = ''
            if (option.disabled) return
            if (!this.select.multiple) {
                this.select.options.forEach(op => {
                    op.selected = false
                })
                option.selected = true
                this.select.value = option
            } else {
                option.selected ? this.select.value.$remove(option) : this.select.value.push(option)
                option.selected = !option.selected
            }
            this.$emit('change', this.select, option)
        },
        setDisplayValue (options) {
            const selected = options.filter(option => {
                return option.selected
            })
            this.select.value = this.select.multiple ? selected : selected[0] || {}
        },
        showOption (e) {
            if (this.select.disabled) return
            let rect = this.$el.getBoundingClientRect()
            if (rect.top > rect.bottom) {
                this.position = 'top'
            } else {
                this.position = 'bottom'
            }
            this.show = !this.show
        }
    }
}
</script>
