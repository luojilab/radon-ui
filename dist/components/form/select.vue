
<template>
    <div 
        class="rd-select-container"
        @click="showOption" 
        :class="{ 
            'active': show,
            'rd-select-top': position === 'top'
        }"
    >
        <div class="rd-select-selected-value">
            <span v-show="valueShow">{{value.value}}</span>
            <div class="rd-select-search-wrapper" v-show="show">
                <input 
                    @focus="focusInput" 
                    @click="touchInput" 
                    @blur="leaveInput" 
                    type="text" 
                    v-model="search" 
                    class="rd-select-search-input"
                >
            </div>
        </div>
        <span class="rd-select-arrow ion-chevron-down"></span>
        <div class="rd-select-options-container">
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
        value: {
            type: Object,
            required: true
        },
        options: {
            type: Array,
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
                let list = this.options.filter(item => {
                    return reg.test(item.value)
                })
                if (list.length === 0) {
                    return [{
                        selected: false,
                        disabled: true,
                        value: '无法找到',
                        id: null
                    }]
                }
                return list
            }
            return this.options
        }
    },
    ready () {
        window.addEventListener('click', this.hide, false)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.hide)
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
        setValue (option) {
            this.search = ''
            if (option.disabled) return
            this.options.forEach(op => {
                op.selected = false
            })
            option.selected = true
            this.value = option
        },
        showOption (e) {
            e.stopPropagation()
            if (e.clientY + document.body.scrollTop + 320 > document.body.offsetHeight) {
                this.position = 'top'
            } else {
                this.position = 'bottom'
            }
            this.show = !this.show
        }
    }
}
</script>
