
<template>
    <div class="rd-form-item">
        <div class="rd-form-item-title">
            {{title}}
        </div>
        <div class="rd-form-item-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: String
        }
    }
</script>