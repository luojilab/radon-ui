

<template>
    <div class="rd-card" :class="{'has-title': title}" :style="cardStyleList">
        <div v-if="title" class="rd-card-title">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        bgColor: {
            type: String,
            default: '#fff'
        },
        fontColor: {
            type: String,
            default: '#555'
        }
    },
    computed: {
        cardStyleList () {
            let list = {}
            list['background-color'] = this.bgColor
            list['color'] = this.fontColor
            return list
        }
    }
}
</script>