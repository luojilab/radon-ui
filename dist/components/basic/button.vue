
<template>
    <button 
        class="rd-btn"
        :class="{
            'rd-btn-primary' : type === 'primary',
            'rd-btn-default' : type === 'default',
            'rd-btn-ghost'   : type === 'ghost',
            'rd-btn-icon'    : icon,
            'rd-btn-small'   : size === 'small',
            'rd-btn-large'   : size === 'large',
            'rd-btn-disabled': disabled
        }"
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
            let list = {}
            if (this.icon) {
                list[this.icon] = true
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