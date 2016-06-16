<style>
.rd-cascader-container {
    display: inline-block;
}
.rd-cascader-content {
    display: flex;
    border: 1px solid #e8e8e8;
    border-radius: .25rem;
    min-height: 10rem;
}
.rd-cascader-menu {
    min-width: 6rem;
    border-right: 1px solid #e8e8e8;
}
.rd-cascader-item {
    padding: .5rem .5rem;
}
.rd-cascader-item:hover,
.rd-cascader-item.active {
    background: #efefef;
}
</style>
<template>
    <div class="rd-cascader-container">
        <div class="rd-cascader-content">
            <ul class="rd-cascader-menu" v-for="(index, one) in list">
                <li 
                    class="rd-cascader-item" 
                    v-for="item in one" 
                    @click="touch(index, item)"
                    :class="{ 'active': item.selected }"
                >
                    {{item.label}}
                </li>
            </ul>
        </div>
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
            list: [options]
        }
    },
    methods: {
        touch (index, group) {
            if (!group.children) return console.log('done')
            this.list[index].map(g => {
                // console.log(g.label)
                g['selected'] = false
            })
            console.log(group.label)
            group['selected'] = true

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
