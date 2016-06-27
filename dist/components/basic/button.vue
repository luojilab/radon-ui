
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
        disabled: {
            type: Boolean,
            default () {
                return false
            }
        }
    }
}
</script>