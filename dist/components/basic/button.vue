
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