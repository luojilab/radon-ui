<style src="./lib/highlight/styles/github-gist.css"></style>
<style>
html,body{
    height: 100%;
    margin: 0;
}
.page-wrapper {
    background: #ececec;
    padding: 1rem 4rem 4rem 4rem;
}
.ex-header {
    display: flex;
    height: 4rem;
    width: 100%;
    padding: 0 3rem;
    z-index: 999;
    background: #fff;
    box-sizing: border-box;
}
.ex-header-logo {
    padding-top: .5rem;
    width: 12rem;
}
.ex-header-logo-img {
    display: none;
    height: 2rem;
    margin: 1rem 1rem 0 0;
}
.ex-header-logo-text {
    color: #66e6c9;
    font-size: 2.5rem;
    font-weight: 100;
    line-height: 3rem;
}
.ex-header-nav {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.ex-header-nav-item {
    color: #666;
    text-align: center;
    line-height: 4rem;
    min-width: 4rem;
    cursor: pointer;
}
.ex-header-nav-item.active,
.ex-header-nav-item:hover {
    color: #66e6c9;
    border-bottom: 2px solid #66e6c9;
}
.container {
    position: relative;
    display: flex;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
    overflow-x: hidden;
}
.sidebar {
    width: 15rem;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-color: #fff;
}
.content{
    min-width: 40rem;
    height: 100%;
    padding: 1rem;
    background: #fff;
    border-left: 1px solid #f7f7f7;
}
.ex-container {
    display: flex;
}
.ex-menu-container {
    min-height: 40rem;
}
.ex-menu-item {
    position: relative;
    cursor: pointer;
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
    font-size: .8rem;
    cursor: pointer;
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
.ex-sub-menu-item.active {
    color: #2db7f5;
}
.ex-card {
    margin: 2rem 1rem;
}
.show-slider {
    display: none;
    position: fixed;
    font-size: 2rem;
    left: 1rem;
    top: .5rem;
    line-height: 2rem;
    z-index: 3;
}
.ex-footer {
    display: flex;
    padding: 1rem 4rem 2rem 4rem;
    background-color: #fff;
}
.ex-footer-nav {
    display: flex;
    width: 100%;
}
.ex-footer-info {
    font-size: .8rem;
    width: 16rem;
    text-align: right;
}
.ex-footer-nav-item {
    flex: 1;
}
.ex-footer-nav-link {
    font-size: .8rem;
    margin: .25rem 0;
}
.ex-footer-nav-link-a {
    color: #2db7f5;
}
.ex-footer-nav-link-description {
    color: #ababab;
}
@media screen and (max-width: 1000px) {
    html {
        font-size: 40px;
    }
    .container {
        padding-left: 0;
    }
    .show-slider {
        display: inline-block;
    }
    .sidebar {
        padding-top: 3rem;
        z-index: 2;
    }
}
</style>
<template>
    <div>
        <header class="ex-header">
            <a v-link="{ path: '/' }">
                <div class="ex-header-logo">
                    <span class="ex-header-logo-text">Radon UI</span>
                </div>
            </a>
            <nav class="ex-header-nav">
                <a v-for="item in header.nav" :href="item.link">
                    <div class="ex-header-nav-item" :class="{ 'active': item.active }">
                        <span class="ex-header-nav-text">{{item.title}}</span>
                    </div>
                </a>
            </nav>
        </header>
        <div class="page-wrapper">
            <div class="container">
                <div class="show-slider" @click="sliderShow = !sliderShow">
                    <span class="ion-navicon"></span>   
                </div>
                <div class="sidebar" v-show="sliderShow">
                    <div class="ex-menu-container">
                        <menu :menu="menu" @click="mobileClick"></menu>
                    </div>      
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
                <radon-modal :modal="modal"></radon-modal>
                <rd-notification :notifications="Notifications"></rd-notification>
            </div>
        </div>
        <footer class="ex-footer">
            <nav class="ex-footer-nav">
                <div class="ex-footer-nav-item" v-for="item in footer.nav">
                    <span class="ex-footer-nav-title">{{item.title}}</span>
                    <div class="ex-footer-nav-link" v-for="link in item.links">
                        <a  class="ex-footer-nav-link-a" :href="link.link">{{link.title}}</a>
                        <span class="ex-footer-nav-link-description">{{link.sub}}</span>
                    </div>
                </div>
            </nav>
            <div class="ex-footer-info">
                <p>©2016 罗辑思维前端团队出品</p>
            </div>
        </footer>
    </div>
    
</template>
<script>
import Menu from './components/menu.vue'
import {
    radonModal,
    rdNotification
} from '../src/components/index'

export default {
    data () {
        return {
            sliderShow: document.body.offsetWidth > 1000,
            Notifications: [],
            menu: [{
                title: '快速上手',
                link: '/'
            }, {
                title: '安装',
                link: '/install'
            }, {
                title: 'components',
                link: 'form',
                showSub: true,
                subMenu: [{
                    title: 'Button',
                    subTitle: '按钮',
                    link: 'button'
                }, {
                    title: 'Checkbox',
                    subTitle: '多选框',
                    link: 'checkbox'
                }, {
                    title: 'Radio',
                    subTitle: '单选框',
                    link: 'radio'
                }, {
                    title: 'Textfield',
                    subTitle: '输入框',
                    link: 'textfield'
                }, {
                    title: 'Table',
                    subTitle: '表格',
                    link: 'table'
                }, {
                    title: 'Switch',
                    subTitle: '开关',
                    link: 'switch'
                }, {
                    title: 'Timeline',
                    subTitle: '时间线',
                    link: 'timeline'
                }, {
                    title: 'Slider',
                    subTitle: '滑动输入',
                    link: 'slider'
                }, {
                    title: 'Progress',
                    subTitle: '进度条',
                    link: 'progress'
                }, {
                    title: 'Datepicker',
                    subTitle: '日期选择',
                    link: 'datepicker'
                }, {
                    title: 'Select',
                    subTitle: '选择器',
                    link: 'select'
                }, {
                    title: 'Cascader',
                    subTitle: '级联选择器',
                    link: 'cascader'
                }, {
                    title: 'Alert',
                    subTitle: '警告提示',
                    link: 'alert'
                }, {
                    title: 'Modal',
                    subTitle: '对话框',
                    link: 'modal'
                }, {
                    title: 'Tooltip',
                    subTitle: '对话框',
                    link: 'tooltip'
                }, {
                    title: 'Spin',
                    subTitle: '加载中',
                    link: 'spin'
                }, {
                    title: 'Demo',
                    subTitle: 'playground',
                    link: 'form'
                }]
            }],
            header: {
                nav: [{
                    title: '首页',
                    link: '',
                    active: true
                }, {
                    title: '组件',
                    link: '',
                    active: false
                }, {
                    title: '资源',
                    link: '',
                    active: false
                }]
            },
            footer: {
                nav: [{
                    title: '源码',
                    links: [{
                        title: '仓库',
                        link: 'http://gitlab.dev.didatrip.com/FE/radon-ui',
                        sub: '- Gitlab'
                    }]
                }, {
                    title: '相关链接',
                    links: [{
                        title: 'Vue.js',
                        link: 'http://vuejs.org/'
                    }, {
                        title: 'Webpack',
                        link: 'http://webpack.github.io/'
                    }]
                }, {
                    title: '联系我们',
                    links: [{
                        title: '反馈和建议',
                        link: 'http://gitlab.dev.didatrip.com/FE/radon-ui'
                    }, {
                        title: '报告bug',
                        link: 'http://gitlab.dev.didatrip.com/FE/radon-ui'
                    }]
                }]
            },
            modal: {
                show: false,
                title: '',
                content: '',
                cancel: () => {},
                confirm: () => {}
            }
        }
    },
    created () {
        this.$SetRoot(this)
    },
    components: {
        Menu,
        radonModal,
        rdNotification
    },
    methods: {
        mobileClick () {
            if (document.body.offsetWidth < 768) {
                this.sliderShow = false
            }
        }
    }
}
</script>
