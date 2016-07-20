

<template>
    <div class="rd-tag-wrapper" :style="tagStyle">
        <div class="rd-tag-value">{{value}}</div>
        <i class="ion-close-circled" :class="iconClass" v-if="icon" @click="iconAction"></i>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        bgcolor: String,
        color: String,
        icon: String,
        action: {
            type: Function
        }
    },
    computed: {
        iconClass () {
            let list = {}
            if (this.icon) {
                list[this.icon] = true
            }
            return list
        },
        tagStyle () {
            let list = {}
            if (this.color) {
                list['color'] = this.color
            }
            if (this.bgcolor) {
                list['background'] = this.bgcolor
            }
            return list
        }
    },
    methods: {
        iconAction () {
            if (this.action) {
                this.action(this.value)
            }
        }
    }
}
</script>