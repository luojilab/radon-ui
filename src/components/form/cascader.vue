<style>
.rd-cascader-container {
    position: relative;
    border: 1px solid #d9d9d9;
    display: inline-block;
    min-width: 6rem;
    border-radius: 6px;
    height: 2rem;
    line-height: 2rem;
    padding: 0 2rem 0 .5rem;
    vertical-align: bottom;
}
.rd-cascader-input {
    display: inline-block;
}
.rd-cascader-text {
    font-size: .8rem;
    line-height: 2rem;
}
.rd-cascader-content {
    position: absolute;
    top: 2rem;
    left: 0;
    display: flex;
    border: 1px solid #e8e8e8;
    border-radius: .25rem;
    min-height: 10rem;
    background: #fff;
}
.rd-cascader-menu {
    min-width: 6rem;
    border-right: 1px solid #e8e8e8;
}
.rd-cascader-item {
    font-size: .8rem;
    padding: .1rem .5rem;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .3s ease;
}
.rd-cascader-item:hover,
.rd-cascader-item.active {
    background: #efefef;
}
.rd-cascader-arrow {
    position: absolute;
    top: 0;
    right: .5rem;
    font-size: .4rem;
    transform: rotate(0);
    transition: transform 0.2s ease;
}
.rd-cascader-container.active .rd-cascader-arrow {
    transform: rotate(180deg);
}
.rd-cascader-top .rd-cascader-content {
    bottom: 2rem;
    top: initial;
}
</style>
<template>
    <div 
        class="rd-cascader-container"
        :class="{
            'active': show,
            'rd-cascader-top': position === 'top'
        }"
        @click="showAction"
    >
        <div class="rd-cascader-input">
            <span class="rd-cascader-text">{{value}}</span>
            <span class="rd-cascader-arrow ion-chevron-down"></span>
        </div>
        <div class="rd-cascader-content" v-show="show">
            <ul class="rd-cascader-menu" v-for="(index, one) in list">
                <li 
                    class="rd-cascader-item" 
                    v-for="item in one" 
                    @click="touch($event, index, item)"
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
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}]
export default {
    data () {
        return {
            position: 'top',
            show: false,
            valueArr: [],
            value: '',
            list: [options]
        }
    },
    ready () {
        window.addEventListener('click', this.hide, false)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.hide)
    },
    methods: {
        hide ($event) {
            if ($event.path.indexOf(this.$el) === -1) {
                this.show = false
            }
        },
        showAction ($event) {
            $event.stopPropagation()
            if ($event.clientY + document.body.scrollTop + 320 > document.body.offsetHeight) {
                this.position = 'top'
            } else {
                this.position = 'bottom'
            }
            this.show = !this.show
        },
        format (selectedGroup) {
            let valueArr = []
            selectedGroup.map(item => {
                valueArr.push(item.label)
            })
            return valueArr.join('/')
        },
        selectAll () {
            this.valueArr = []
            this.list.forEach(group => {
                group.forEach(item => {
                    if (item.selected) {
                        this.valueArr.push(item)
                    }
                })
            })
            this.value = this.format(this.valueArr)
        },
        touch ($event, index, group) {
            $event.stopPropagation()
            if (this.list.length !== 1 + index) {
                this.list = this.list.slice(0, 1 + index)
            }
            if (group.children) {
                this.list.push(group.children)
            }

            this.list[index].map(g => {
                g['selected'] = false
            })
            group['selected'] = true
            this.selectAll()
        }
    }
}
</script>
