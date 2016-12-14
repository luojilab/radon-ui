

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