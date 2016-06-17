<style lang="scss">
@import '../../sass/index';
.radon-form-item {
    display: flex;
}
.radon-form-item-title {
    color: #666;
    text-align: right;
    vertical-align: middle;
    line-height: 2;
    min-width: 6rem;
    padding-right: .5rem;
}
.radon-form-item-wrapper {
    width: 100%;
}
.form-item-contrl {
    line-height: 2rem;
}
.radon-form-item { 
    margin-bottom: 1.5rem;
    color: #666;
}
</style>
<template>
    <div class="radon-form-item">
        <div class="radon-form-item-title">
            {{title}}
        </div>
        <div class="radon-form-item-wrapper">
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