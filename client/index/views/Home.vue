<template>
    <div>
        <div class="content home">
            it's home page
            <div>
                user's name: {{User.name}}
            </div>
            <div v-for="item in list">{{item}}</div>
            <button @click="addOne">add a 233</button>
            <comp-a></comp-a>
        </div>
    </div>
</template>

<script>
import compA from '../components/compA.vue'
export default {
    name: 'Home',
    serverCacheKey: () => 'home',
    data () {
        return {
            list: ['test', '233']
        }
    },
    computed: {
        User () {
            return this.$store.getters.User
        }
    },
    components: {
        compA
    },
    methods: {
        addOne () {
            this.list.push('233')
        }
    }
}
</script>
