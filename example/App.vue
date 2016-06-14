<style lang="scss">

html,body{
    height: 100%;
    margin: 0;
}
.container{
    height: 100%;
    position: relative;
    overflow: hidden;
}
.sidebar{
    width: 20%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid #f7f7f7;
}
.content{
    width: 100%;
    padding-left: 20%;
    height: 100%;
}
.ex-container {
    display: flex;
}
.ex-menu-container {
    min-height: 40rem;
}
.ex-menu-item {
    position: relative;
}
.ex-menu-title-container {
    font-size: 1rem;
    padding: 1rem 1.5rem;
}
.ex-menu-sub-title,
.ex-sub-menu-sub-title{
    color: #666;
    opacity: .67;
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
.ex-menu-item.open .ex-menu-title-arrow {
    transform: rotate(180deg);
}
.ex-menu-item.active {
    color: #2db7f5;
}
</style>
<template>
	<div class="container">
		<div class="sidebar">
            <div class="ex-menu-container">
                <menu :menu="menu"></menu>
            </div>      
        </div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import Menu from './views/menu.vue'
export default {
    data () {
        return {
            menu: [{
                title: 'radon',
                subTitle: 'ui',
                link: 'index',
                subMenu: [{
                    title: 'radon',
                    subTitle: 'com',
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
