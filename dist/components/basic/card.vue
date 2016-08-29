

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