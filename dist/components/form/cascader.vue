
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
