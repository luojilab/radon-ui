<style>
.rd-cascader-menu {}
</style>
<template>
    <div class="rd-cascader-container">
        <ul class="rd-cascader-menu" v-for="(index, one) in list">
            <li class="rd-cascader-item" v-for="item in one" @click="touch(index, item)">
                {{item.label}}
            </li>
        </ul>
    </div>
</template>
<script>
const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'hangzhou',
            label: '2333'
        }, {
            value: 'hangzhou',
            label: '322'
        }]
    }]
}, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
            value: 'hangzhou',
            label: '2333'
        }, {
            value: 'hangzhou',
            label: '322'
        }]
    }]
}]
export default {
    data () {
        return {
            length: 1,
            list: [options]
        }
    },
    methods: {
        touch (index, group) {
            console.log(this.list.length, 1 + index)
            if (this.list.length === 1 + index) {
                this.list.push(group.children)
            } else {
                this.list = this.list.slice(0, 1 + index)
                this.list.push(group.children)
            }
        }
    }
}
</script>
