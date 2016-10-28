
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
