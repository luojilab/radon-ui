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
}

.rd-select-container:hover {
    border: 1px solid $primary-color;
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
    display: none;
    position: absolute;
    background: #fff;
    min-width: 6rem;
    border-radius: $border-radius-base;
    padding: 0;
    border: 1px solid #ccc;
    top: 2.2rem;
    left: -1px;
    background-color: #fff;
    z-index: 2;
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
    background: #e6e6e6;
}

.rd-select-option.disabled {
    color: #ccc;
    cursor: not-allowed;
}

.rd-select-option:hover {
    background: #f7f7f7;
}

.rd-select-top .rd-select-options-container{
    bottom: 2rem;
    top: initial;
}

.rd-select-selected-value {
    position: relative;
    font-size: .8rem;
    line-height: 2rem;
}

.rd-select-search-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
}

.rd-select-search-input {
    width: 100%;
    border: 0;
    opacity: .5;
}
</style>
<template>
    <div 
        class="rd-select-container"
        @click="showOption" 
        :class="{ 
            'active': show,
            'rd-select-top': position === 'top'
    }">
        <div class="rd-select-selected-value">
            <span v-show="valueShow">{{value.value}}</span>
            <div class="rd-select-search-wrapper" v-show="show">
                <input @focus="focusInput" @click="touchInput" @blur="leaveInput" type="text" v-model="search" class="rd-select-search-input">
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
            if (e.path.indexOf(this.$el) === -1) {
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
