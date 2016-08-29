<style>
.rd-card {
    background: #fff;
    font-size: .8rem;
    padding: .5rem 1rem;
    margin-bottom: .5rem;
}
.rd-card-title {
    font-size: 1rem;
    background: #fbfbfb;
    padding: .5rem;
    margin: 0 -1rem;
    margin: -.5rem -1rem .5rem -1rem;
    border-bottom: 2px solid #d4d4d4;
}
</style>

<template>
    <div class="rd-card" :class="{'has-title': title}">
        <div v-if="title" class="rd-card-title">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>