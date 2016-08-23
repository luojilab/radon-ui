<style>
.rd-tag-wrapper {
    display: inline-block;
    font-size: .8rem;
    padding: .1rem .5rem;
    background: #57c5f7;
    margin: 0 .5rem 0 0;
    color: #fff;
    line-height: 1.5rem;
}
.rd-tag-value {
    display: inline-block;
}
.rd-tag-close:hover {
    color: #607D8B;
}
.rd-tag-wrapper.ghost {
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
}
.rd-tag-wrapper.warning {
    background-color: #fa0;
    border-color: #fa0;
}
.rd-tag-wrapper.danger {
    background-color: #f50;
    border-color: #f50;
}
.rd-tag-wrapper.success {
    background-color: #87d068;
    border-color: #87d068;
}
.rd-tag-wrapper.info {
    border-color:#2db7f5;
    background-color: #2db7f5;
}
.rd-tag-icon {
    vertical-align: middle;
}
</style>

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