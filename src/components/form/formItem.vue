<style>
@import '../../css/index';
.rd-form-item {
    display: flex;
}
.rd-form-item-title {
    color: #666;
    text-align: right;
    vertical-align: middle;
    line-height: 2;
    min-width: 6rem;
    padding-right: .5rem;
}
.rd-form-item-wrapper {
    width: 100%;
}
.form-item-contrl {
    line-height: 2rem;
}
.rd-form-item { 
    margin-bottom: 1.5rem;
    color: #666;
}
</style>
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