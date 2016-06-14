<style>
.ex-container {
    display: flex;
}
.ex-menu-container {
    width: 20%;
    min-height: 40rem;
}
.ex-menu-item {
    position: relative;
}
.ex-menu-title {
    font-size: 1rem;
    padding: 1rem 1.5rem;
}
.ex-menu-title:hover,
.ex-sub-menu-item:hover {
    background: #eaf8fe;
}
.ex-sub-menu-item {
    padding: 1rem 2rem;
}
.ex-menu-title-arrow {
    position: absolute;
    font-size: .5rem;
    right: 1rem;
    top: 1.25rem;
    transform: rotate(0);
    transition: transform 0.2s ease;
}
.ex-menu-item.active .ex-menu-title-arrow {
    transform: rotate(180deg);
}
</style>
<template>
    <div class="ex-container">
        <div class="ex-menu-container">
            <menu :menu="menu"></menu>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Menu from './views/menu.vue'
export default {
    data () {
        return {
            menu: [{
                title: 'radon',
                link: 'index',
                subMenu: [{
                    title: 'radon',
                    link: 'index'
                }]
            }, {
                title: 'radon',
                link: 'index',
                subMenu: [{
                    title: 'radon',
                    link: 'index'
                }, {
                    title: 'radon',
                    link: 'index'
                }, {
                    title: 'radon',
                    link: 'index'
                }]
            }, {
                title: 'radon',
                link: 'index',
                subMenu: [{
                    title: 'radon',
                    link: 'index'
                }]
            }]
        }
    },
    components: {
        Menu
    }
}
</script>
