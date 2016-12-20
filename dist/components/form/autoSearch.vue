

<template>
    <div class="rd-auto-search-container">
        <rd-text :textfield='text' @keyup="inputAction" @blur="blurAction" @keyup.enter="blurAction" @mouseout="blurAction"></rd-text>
        <ul class="rd-search-result" v-if="resultList.show" @mouseover="optionState" @mouseout="blurAction">
            <template v-if="search.list.length > 0">
                <li v-for="item in search.list" @click="setValue(item)">{{item.value}}</li>
            </template>
            <li v-else>没有相关数据</li>
        </ul>
    </div>
</template>

<script>
import rdText from './textfield'

export default {
    props: {
        search: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            text: {
                value: '',
                placeHolder: '',
                state: 'default',
                tip: ''
            },
            resultList: {
                show: false,
                over: true
            }
        }
    },
    created () {
        this.$on('select:option', option => {
            this.setValue(option)
        })
    },
    components: {
        rdText
    },
    methods: {
        inputAction () {
            this.$emit('inputing', this.text.value, this)
            if (this.text.value !== '') {
                this.resultList.show = true
            } else {
                this.resultList.show = false
                this.search.list.map(items => {
                    items.selected = false
                })
            }
        },
        setValue (item) {
            this.text.value = item.value
            this.search.list.map(items => {
                items.selected = false
            })
            item.selected = true
            this.resultList.show = false
        },
        blurAction () {
            this.resultList.over = false
            setTimeout(() => {
                if (!this.resultList.over) {
                    this.resultList.show = false
                    this.search.list.map(item => {
                        if (item.selected !== true) {
                            this.search.list = [{
                                id: 1,
                                value: this.text.value,
                                selected: true
                            }]
                        }
                    })
                    if (this.search.list.length === 0) {
                        this.search.list = [{
                            id: 1,
                            value: this.text.value,
                            selected: true
                        }]
                    }
                }
            }, 500)
        },
        optionState () {
            this.resultList.over = true
        }
    }
}
</script>