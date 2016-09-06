<style>
@import '../../css/index';
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
.rd-cascader-container:hover {
    border: 1px solid $primary-color;
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
    height: 10rem;
    background: #fff;
    box-shadow: 0 1px 6px hsla(0,0%,39%,.2);
    z-index: 2;
}
.rd-cascader-menu {
    min-width: 6rem;
    border-right: 1px solid #e8e8e8;
    overflow-y: auto;
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
import {
    catIn
} from '../utils'

export default {
    props: {
        cascader: Object
    },
    data () {
        return {
            position: 'top',
            show: false,
            valueArr: [],
            value: '',
            list: []
        }
    },
    ready () {
        this.list = [this.cascader.options]
        window.addEventListener('click', this.hide, false)
    },
    mounted () {
        this.list = [this.cascader.options]
        window.addEventListener('click', this.hide, false)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.hide)
    },
    methods: {
        hide ($event) {
            if (!catIn($event.target, this.$el)) {
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
            this.cascader.valueArr = this.valueArr
            this.value = this.format(this.valueArr)
        },
        touch ($event, index, group) {
            $event.stopPropagation()
            if (this.list.length !== 1 + index) {
                this.list = this.list.slice(0, 1 + index)
            }

            this.list[index].map(g => {
                g['selected'] = false
            })
            group['selected'] = true
            this.selectAll()

            if (group.children) {
                this.list.push(group.children)
            } else {
                this.show = false
            }
        }
    }
}
</script>
