<style>
.rd-card-group {
    display: flex;
    margin: .5rem 0;
    &>.rd-card {
        margin: 0 .5rem;
    }
    &>.rd-card:first-child {
        margin-left: 0;
    }
    &>.rd-card:last-child {
        margin-right: 0;
    }
}  
@media screen and (max-width: 768px) {
    .rd-card-group {
        flex-wrap: wrap;
        &>.rd-card {
            margin: 0 0 .5rem 0;
        }
    } 
}
</style>

<template>
    <div class="rd-card-group" :class="{ 'with-title': title }">
        <div v-if="title" class="rd-card-group-title">{{title}}</div>
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