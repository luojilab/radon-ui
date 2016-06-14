<template>
    <li class="ex-menu-item" :class="{'active': showSub}">
        <div class="ex-menu-title" @click="toggleSub">
            <span>{{menuItem.title}}</span>
            <span class="ex-menu-title-arrow ion-chevron-down" v-if="menuItem.subMenu"></span>
        </div>
        <ul v-if="menuItem.subMenu && showSub">
            <li class="ex-sub-menu-item" v-for="subMenuItem in menuItem.subMenu">
                {{subMenuItem.title}}
            </li>
        </ul>
    </li>
</template>
<script>
export default {
    props: {
        menuItem: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            showSub: false
        }
    },
    methods: {
        toggleSub () {
            this.showSub = !this.showSub
        }
    }
}
</script>