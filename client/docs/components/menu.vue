<template>
    <ul class="ex-menu">
        <rd-menu-item 
            class="ex-menu-item" 
            v-for="menuItem in menu" 
            :menu-item="menuItem"
        >
        </rd-menu-item>
    </ul>
</template>
<script>
import rdMenuItem from './menuItem.vue'
export default {
    props: {
        menu: {
            type: Array,
            required: true
        }
    },
    components: {
        rdMenuItem
    }
}
</script>