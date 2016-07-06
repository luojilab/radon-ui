
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