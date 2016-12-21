<style src="./lib/highlight/styles/atom-one-light.css"></style>
<style src="../dist/radon-ui.css"></style>
<style>
html,body{
    height: 100%;
    margin: 0;
}
.page-wrapper {
    background: #f1f4f9;
    padding: 1rem 4rem 4rem 4rem;
}
.ex-header {
    display: flex;
    height: 4rem;
    width: 100%;
    padding: 0 3rem;
    z-index: 999;
    background: #2db7f5;
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
    color: #fff;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 3rem;
}
.ex-header-nav {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.ex-header-nav-item {
    color: #fff;
    text-align: center;
    font-size: .9rem;
    line-height: 3.9rem;
    min-width: 4rem;
    cursor: pointer;
}
.ex-header-nav-item.active,
.ex-header-nav-item:hover {
    color: #fff;
    border-bottom: .2rem solid #fff;
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
    margin-bottom: 5rem;
    background-color: #fff;
    flex-shrink: 0;
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
    width: 100%;
    display: block;
    color: #666;
    box-sizing: border-box;
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
.ex-menu-group-title {
    color: #b9b9b9;
    font-size: .8rem;
    padding-left: 1.5rem;
}
.show-slider {
    display: none;
    position: fixed;
    font-size: 2rem;
    z-index: 3;
    color: #fff;
    width: 4rem;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    top: 0;
    right: 0;
}
.ex-footer {
    display: flex;
    padding: 2rem 4rem 5rem 4rem;
    background-color: #67cdfb;
}
.ex-footer-nav {
    display: flex;
    width: 50%;
}
.ex-footer-info {
    color: #fff;
    font-size: .8rem;
    width: 50%;
    text-align: right;
}
.ex-footer-nav-item {
    flex: 1;
}
.ex-footer-nav-title {
    color: #fff;
}
.ex-footer-nav-link {
    font-size: .8rem;
    margin: .25rem 0;
}
.ex-footer-nav-link-a {
    color: #fff;
}
.ex-footer-nav-link-description {
    color: #fff;
}
.demo-content {
    width: 20rem;
}
.slide-left-transition {
  transition: transform .3s ease;
  transform: translateX(0)
}
.slide-left-enter,
.slide-left-leave {
    transform: translateX(-100%)
}
@media screen and (max-width: 1000px) {
    .ex-header {
        padding: 0 1rem;
        position: fixed;
    }
    .page-wrapper {
        padding: 0;
    }
    .container {
        padding-left: 0;
    }
    .content {
        min-width: initial;
        padding: 4rem 1rem;
        box-sizing: border-box;
        overflow: hidden;
    }
    .show-slider {
        display: inline-block;
        width: 4rem;
        text-align: center;
        height: 4rem;
        line-height: 4rem;
        top: 0;
        right: 0;
    }
    .sidebar {
        position: fixed;
        z-index: 1000;
        top: 0;
        overflow-y: auto;
    }
    .ex-header-nav {
        display: none;
    }
    .ex-footer {
        padding: .5rem 1rem;
        font-size: .8rem;
        flex-wrap: wrap;
    }
    .ex-footer-nav {
        width: 100%;
    }
    .ex-footer-nav-item {
        text-align: center;
    }
    .ex-footer-info {
        width: 100%;
        text-align: center;
    }
    .ex-footer-nav-link {
        font-size: .6rem;
    }
}
/* rdmark */
.ex-mark-text {
    display: none;
}
.marked p{
    max-width: 40rem;
}
.marked code {
    background: #f7f7f7;
    color: #FF5722;
}
.marked pre code {
    display: block;
    background: #f7f7f7;
    padding: 1rem;
    color: #999;
    font-size: .8rem;
    line-height: 1.2;
    overflow-x: auto;
}
.marked pre {
    line-height: 1.5em;
    margin: 1rem 0;
}
.marked {
    font-size: .9rem;
    line-height: 1.8;
    color: #666;
    max-width: 40rem;
}
.marked h1 {
    font-size: 1.6rem;
}
.marked h2 {
    font-size: 1.2rem;
    position: relative;
}
.marked h3 {
    position: relative;
}
.marked h3::before {
    content: "#";
    color: #00BCD4;
    font-size: 1.2em;
    font-weight: bold;
    margin-right: .5rem;
}
.marked blockquote {
    position: relative;
    font-size: 90%;
    color: #404040;
    border-left: 4px solid #67cdfb;
    padding-left: .8em;
    margin: 1em 0;
    background: #f8f8f8;
    padding: 1rem;
}
.marked blockquote p {
    margin: 0;
}
.marked blockquote::before {
    position: absolute;
    top: 14px;
    left: -12px;
    background-color: #67cdfb;
    color: #fff;
    content: "!";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
}
.marked ul, ol {
    padding: 0 2rem;
    list-style: inherit;
}
.marked table {
    width: 100%;
    max-width: 100%;
    text-align: left;
    border-radius: 6px;
}
.marked thead {
    background: #e0f5ff;
}
.marked th {
    color: rgba(0,0,0,.870588);
    height: 3rem;
    border-bottom: 1px solid #e9e9e9;
}
.marked tr > td:first-child,
.marked tr > th:first-child {
    padding-left: .5rem
}
.marked tr > td:last-child,
.marked tr > th:last-child {
    padding-right: .5rem
}
.marked tr > td {
    height: 2rem;
    line-height: 1rem;
    border-bottom: 1px solid #ececec;
}
@media screen and (max-width: 768px) {
    .ex-card {
        margin: 0;
    }
}
</style>
<template>
    <div>
        <header class="ex-header">
            <router-link :to="{ name: 'home' }">
                <div class="ex-header-logo">
                    <span class="ex-header-logo-text">Radon UI</span>
                </div>
            </router-link>
            <div class="show-slider" @click="sliderShow = !sliderShow">
                <span class="ion-navicon"></span>   
            </div>
            <nav class="ex-header-nav">
                <router-link v-for="item in header.nav" :to="item.route">
                    <div class="ex-header-nav-item" :class="{ 'active': item.active }">
                        <span class="ex-header-nav-text">{{item.title}}</span>
                    </div>
                </router-link>
            </nav>
        </header>
        <div class="page-wrapper">
            <div class="container">
                <div class="sidebar" v-show="sliderShow" transition="slide-left">
                    <div class="ex-menu-container">
                        <rd-menu :menu="menu" @click="mobileClick"></rd-menu>
                    </div>      
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
                <rd-modal></rd-modal>
                <rd-notification></rd-notification>
                <rd-preview></rd-preview>
                <rd-loadingbar></rd-loadingbar>
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
import rdMenu from './components/menu.vue'

export default {
    data () {
        return {
            sliderShow: document.body.offsetWidth > 1000,
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
                group: true,
                subMenu: [{
                    title: 'Basic',
                    group: [{
                        title: 'Button',
                        subTitle: '按钮',
                        route: {
                            name: 'button'
                        }
                    }, {
                        title: 'dropButton',
                        subTitle: '下拉按钮',
                        route: {
                            name: 'drop-button'
                        }
                    }, {
                        title: 'Tag',
                        subTitle: '标签',
                        route: {
                            name: 'tag'
                        }
                    }, {
                        title: 'Table',
                        subTitle: '表格',
                        route: {
                            name: 'table'
                        }
                    }, {
                        title: 'Card',
                        subTitle: '卡片',
                        route: {
                            name: 'card'
                        }
                    }, {
                        title: 'Swipe',
                        subTitle: '轮播',
                        route: {
                            name: 'swipe'
                        }
                    }]
                }, {
                    title: 'Form',
                    group: [{
                        title: 'Checkbox',
                        subTitle: '多选框',
                        route: {
                            name: 'checkbox'
                        }
                    }, {
                        title: 'Radio',
                        subTitle: '单选框',
                        route: {
                            name: 'radio'
                        }
                    }, {
                        title: 'Textfield',
                        subTitle: '输入框',
                        route: {
                            name: 'textfield'
                        }
                    }, {
                        title: 'Number',
                        subTitle: '数字输入框',
                        route: {
                            name: 'number'
                        }
                    }, {
                        title: 'Switch',
                        subTitle: '开关',
                        route: {
                            name: 'switch'
                        }
                    }, {
                        title: 'Slider',
                        subTitle: '滑动输入',
                        route: {
                            name: 'slider'
                        }
                    }, {
                        title: 'Datepicker',
                        subTitle: '日期选择',
                        route: {
                            name: 'datepicker'
                        }
                    }, {
                        title: 'Select',
                        subTitle: '选择器',
                        route: {
                            name: 'select'
                        }
                    }, {
                        title: 'Cascader',
                        subTitle: '级联选择器',
                        route: {
                            name: 'cascader'
                        }
                    }]
                }, {
                    title: 'Common',
                    group: [{
                        title: 'Alert',
                        subTitle: '警告提示',
                        route: {
                            name: 'alert'
                        }
                    }, {
                        title: 'Timeline',
                        subTitle: '时间线',
                        link: 'common/timeline',
                        route: {
                            name: 'timeline'
                        }
                    }, {
                        title: 'Tooltip',
                        subTitle: '提示框',
                        link: 'common/tooltip',
                        route: {
                            name: 'tooltip'
                        }
                    }, {
                        title: 'Spin',
                        subTitle: '加载中',
                        link: 'common/spin',
                        route: {
                            name: 'spin'
                        }
                    }, {
                        title: 'Upload',
                        subTitle: '上传',
                        link: 'common/upload',
                        route: {
                            name: 'upload'
                        }
                    }, {
                        title: 'AudioPlayer',
                        subTitle: '音频播放器',
                        link: 'common/audio',
                        route: {
                            name: 'audio'
                        }
                    }, {
                        title: 'Progress',
                        subTitle: '进度条',
                        link: 'common/progress',
                        route: {
                            name: 'progress'
                        }
                    }, {
                        title: 'Tree',
                        subTitle: '树选择',
                        link: 'common/tree',
                        route: {
                            name: 'tree'
                        }
                    }]
                }, {
                    title: 'Global',
                    group: [{
                        title: 'Modal',
                        subTitle: '对话框',
                        link: 'global/modal',
                        route: {
                            name: 'modal'
                        }
                    }, {
                        title: 'Notification',
                        subTitle: '通知',
                        link: 'global/notification',
                        route: {
                            name: 'notification'
                        }
                    }, {
                        title: 'Preview',
                        subTitle: '图片预览',
                        link: 'global/preview',
                        route: {
                            name: 'preview'
                        }
                    }, {
                        title: 'LoadingBar',
                        subTitle: '加载进度条',
                        link: 'global/loadingbar',
                        route: {
                            name: 'loadingbar'
                        }
                    }]
                }, {
                    title: 'Navigation',
                    group: [{
                        title: 'Breadcrumb',
                        subTitle: '面包屑',
                        link: 'navigation/breadcrumb',
                        route: {
                            name: 'breadcrumb'
                        }
                    }, {
                        title: 'Pagination',
                        subTitle: '分页',
                        link: 'navigation/pagination',
                        route: {
                            name: 'pagination'
                        }
                    }]
                }]
            }],
            header: {
                nav: [{
                    title: '首页',
                    route: {
                        name: 'index'
                    },
                    active: true
                }, {
                    title: '组件',
                    route: {
                        name: 'button'
                    },
                    active: false
                }, {
                    title: '资源',
                    route: {
                        name: 'resource'
                    },
                    active: false
                }]
            },
            footer: {
                nav: [{
                    title: '源码',
                    links: [{
                        title: '仓库',
                        link: 'https://github.com/luojilab/radon-ui',
                        sub: '- Github'
                    }]
                }, {
                    title: '相关链接',
                    links: [{
                        title: 'Vue.js',
                        link: 'http://vuejs.org/'
                    }, {
                        title: 'Webpack',
                        link: 'http://webpack.github.io/'
                    }, {
                        title: 'ionicons',
                        link: 'http://ionicons.com/'
                    }]
                }, {
                    title: '联系我们',
                    links: [{
                        title: '反馈和建议',
                        link: 'https://github.com/luojilab/radon-ui/issues'
                    }, {
                        title: '报告bug',
                        link: 'https://github.com/luojilab/radon-ui/issues'
                    }, {
                        title: '贡献代码',
                        link: 'https://github.com/luojilab/radon-ui/pulls'
                    }]
                }]
            },
            state: {
                timer: null
            }
        }
    },
    mounted () {
        window.addEventListener('resize', this.resizeCheck)
    },
    components: {
        rdMenu
    },
    methods: {
        resizeCheck () {
            if (this.state.timer) {
                clearTimeout(this.state.timer)
                this.state.timer = null
            }
            this.state.timer = setTimeout(() => {
                if (document.body.offsetWidth > 768) {
                    this.sliderShow = true
                }
            }, 200)
        },
        mobileClick () {
            if (document.body.offsetWidth < 768) {
                this.sliderShow = false
            }
        }
    }
}
</script>
