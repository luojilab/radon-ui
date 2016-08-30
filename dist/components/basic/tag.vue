

<template>
    <div class="rd-tag-wrapper" :style="tagStyle" :class="classList">
        <div class="rd-tag-value">{{value}}</div>
        <span class="rd-tag-icon" :class="iconClass" v-if="icon" @click="iconAction"></span>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        type: String,
        bgcolor: String,
        color: String,
        icon: String,
        action: {
            type: Function
        }
    },
    computed: {
        iconClass () {
            let list = []
            if (this.icon) {
                list.push(this.icon)
            }
            return list
        },
        classList () {
            let list = []
            if (this.type) {
                list.push(this.type)
            }
            return list
        },
        tagStyle () {
            let list = {}
            if (this.color) {
                list['color'] = this.color
            }
            if (this.bgcolor) {
                list['background-color'] = this.bgcolor
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