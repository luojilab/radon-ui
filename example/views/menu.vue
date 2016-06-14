<template>
    <ul class="ex-menu">
        <menu-item 
            class="ex-menu-item" 
            v-for="menuItem in menu" 
            :menu-item="menuItem"
        >
        </menu-item>
    </ul>
</template>
<script>
import menuItem from './menuItem.vue'
export default {
    props: {
        menu: {
            type: Array,
            required: true
        }
    },
    ready () {
        this.$on('resetActive', () => {
            console.log('got it')
        })
    },
    components: {
        menuItem
    }
}
</script>