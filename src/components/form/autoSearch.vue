<style>
    .rd-auto-search-container{
        width:100%;
    }
    .rd-search-result{
        min-width: 300px;
        max-height: 400px;
        overflow-y: scroll;
        position: absolute;
        z-index: 2;
        background: #fff;
        border:1px solid #e1e1e1;
        border-radius: 2px;
        padding:2px;
    }
    .rd-search-result li {
        line-height: 2;
        padding:0 10px;
        font-size: 14px;
        cursor: pointer;
    }
    .rd-search-result li:hover{
        background:#ccc;
        border-radius:2px;
    }
</style>
s
<template>
    <div class="rd-auto-search-container">
        <rd-text :textfield='text' @keyup="inputAction"></rd-text>
        <ul class="rd-search-result" v-if="resultList.show">
            <li v-for="item in search.list" @click="setValue(item)">{{item.value}}</li>
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
                show: false
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
        }
    }
}
</script>