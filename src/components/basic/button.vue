<style>
.radon-btn {
    display: inline-block;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-color: #57c5f7;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: .5rem;
    font-size: 1rem;
    min-width: 5rem;
    color: #fff;
    border-radius: 4px;
}
.radon-btn-default {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.radon-btn-primary {
    color: #fff;
    background-color: #57c5f7;
}
</style>
<template>
    <button 
        class="radon-btn"
        :class="{ 'radon-btn-default': type == 'default' }"
    >
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
        }
    },
    created () {
        console.log(this.type)
    }
}
</script>