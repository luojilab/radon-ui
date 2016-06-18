<style src="./lib/highlight/styles/agate.css"></style>
<style lang="scss">
@import '../src/sass/index';
html,body{
    height: 100%;
    margin: 0;
}
.container{
    height: 100%;
    position: relative;
    padding-left: 20%;
    box-sizing: border-box;
    overflow-x: hidden;
}
.sidebar {
    position: fixed;
    width: 20%;
    height: 100%;
    border-right: 1px solid #f7f7f7;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-color: #fff;
}
.content{
    height: 100%;
    padding: 1rem;
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
.ex-sub-menu-item.active {
    color: #2db7f5;
}
.ex-card {
    margin: 2rem 1rem;
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
			<router-view :create-modal="createModal"></router-view>
		</div>
        <radon-modal :modal="modal"></radon-modal>
	</div>
</template>
<script>
import Menu from './views/menu.vue'
import { radonModal } from '../src/components/index'

export default {
    data () {
        return {
            menu: [{
                title: 'Radon UI for Vue',
                subTitle: 'ui',
                link: ''
            }, {
                title: '快速上手',
                link: 'form',
                subMenu: [{
                    title: '安装',
                    link: 'install'
                }, {
                    title: '升级指南',
                    link: 'update'
                }, {
                    title: '更新日志',
                    link: 'log'
                }]
            }, {
                title: 'components',
                link: 'form',
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
                    title: 'Demo',
                    subTitle: 'playground',
                    link: 'form'
                }]
            }],
            modal: {
                show: false,
                title: '',
                content: '',
                cancel: () => {},
                confirm: () => {}
            }
        }
    },
    components: {
        Menu,
        radonModal
    },
    methods: {
        createModal (title, text, confirm, cancel) {
            this.modal = {
                show: true,
                title: title,
                content: text,
                cancel: cancel,
                confirm: confirm
            }
        }
    }
}
</script>
