<template>
    <div class="list" v-for="item in list">
        <span>{{item}}</span>
    </div>
    <pagination :page-data.sync="list" url="/mock/page" data-key='data'></pagination>
</template>
<script>
import pagination from 'src/components/navigation/pagination.vue'
export default {
    data () {
        return {
            list: [1, 2, 3]
        }
    },
    components: {
        pagination
    }
}
</script>
