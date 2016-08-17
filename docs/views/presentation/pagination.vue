<template>
<div class="ex-content">
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
# Pagination 分页

//To do
            </textarea>
        </mark>
        <div class="list" v-for="item in list">
            <span>{{item}}</span>
        </div>
        <pagination :page-data.sync="list" url="/mock/page" data-key='data'></pagination>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import pagination from 'src/components/navigation/pagination.vue'

export default {
    data () {
        return {
            list: [1, 2, 3]
        }
    },
    components: {
        Mark,
        pagination
    }
}
</script>
