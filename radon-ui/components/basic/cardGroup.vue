<style src="radon-ui-css/basic/cardGroup.css"></style>
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