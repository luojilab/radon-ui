<template>
    <li 
        class="ex-menu-item" 
        :class="{'open': showSub, 'active': menuItem.active}"
    >
        <div class="ex-menu-title-container" @click="toggleSub">
            <span class="ex-menu-title">{{menuItem.title}}</span>
            <span class="ex-menu-sub-title" v-if="menuItem.subTitle">{{menuItem.subTitle}}</span>
            <span class="ex-menu-title-arrow ion-chevron-down" v-if="menuItem.subMenu"></span>
        </div>
        <div v-if="menuItem.subMenu && menuItem.group" v-show="showSub">
            <div v-for="item in menuItem.subMenu">
                <div class="ex-menu-group-title">{{item.title}}</div>
                <ul >
                    <li 
                        v-link="{ path: '/' + subMenuItem.link, activeClass: 'active'}"
                        class="ex-sub-menu-item"
                        :class="{ 'active': subMenuItem.active }"
                        v-for="subMenuItem in item.group"
                    >
                        <span class="ex-sub-menu-title">{{subMenuItem.title}}</span>
                        <span class="ex-sub-menu-sub-title" v-if="subMenuItem.subTitle">{{subMenuItem.subTitle}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <ul v-if="menuItem.subMenu && !menuItem.group" v-show="showSub">
            <li 
                v-link="{ path: '/' + subMenuItem.link, activeClass: 'active'}"
                class="ex-sub-menu-item"
                :class="{ 'active': subMenuItem.active }"
                v-for="subMenuItem in menuItem.subMenu"
            >
                <span class="ex-sub-menu-title">{{subMenuItem.title}}</span>
                <span class="ex-sub-menu-sub-title" v-if="subMenuItem.subTitle">{{subMenuItem.subTitle}}</span>
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
        },
        reset: Function
    },
    data () {
        return {
            showSub: false
        }
    },
    created () {
        if (this.menuItem.showSub) {
            this.showSub = true
        }
    },
    methods: {
        toggleSub () {
            if (!this.menuItem.subMenu) {
                this.$route.router.go({ path: this.menuItem.link })
            } else {
                this.showSub = !this.showSub
            }
        }
    }
}
</script>