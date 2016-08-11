<template>
    <ul class="ex-menu">
        <menu-item 
            class="ex-menu-item" 
            v-for="menuItem in menu" 
            :menu-item.sync="menuItem"
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
    components: {
        menuItem
    }
}
</script>