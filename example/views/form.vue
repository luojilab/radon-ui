<style>
    .form {
        max-width: 540px;
    }
</style>
<template>
    <div>
        <radon-select :value.sync="select.value" :options="select.options"></radon-select>
        <radon-button>default</radon-button>
        <radon-button type="primary">primary</radon-button>
        <radon-button type="ghost" size="large">large</radon-button>
        <radon-button type="ghost">common</radon-button>
        <radon-button type="ghost" size="small">small</radon-button>
        <radon-button type="ghost" :loading="true">save</radon-button>
        <radon-button type="icon"><i class="ion-upload"></i></radon-button>
        <radon-button-group>
            <radon-button type="ghost">common</radon-button>
            <radon-button type="ghost">common</radon-button>
            <radon-button type="ghost">common</radon-button>
        </radon-button-group>
        <form class="form">
            <form-item title="2333:">
                <radon-text :textfield="form.user"></radon-text>
            </form-item>
            <form-item title="username:">
                <radon-text :textfield="form.user" :input="userInputing"></radon-text>
            </form-item>
            <form-item title="password:">
                <radon-text :textfield="form.pass" :input="passInputing"></radon-text>
            </form-item>
            <form-item title="verify:">
                <radon-text @click="failed(form.bio)" :textfield="form.bio"></radon-text>
            </form-item>
            <form-item title="agree:">
                <radon-checkbox :checkbox="checkbox"></radon-checkbox>
            </form-item>
            <form-item title="sex:">
                <radon-radio></radon-radio>
            </form-item>
        </form>
    </div>
</template>
<script>
import radonSelect from '../../src/components/form/select.vue'
import {
    formItem,
    radonButton,
    radonButtonGroup,
    radonCheckbox,
    radonText,
    radonRadio
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {
            select: {
                value: {},
                options: [{
                    selected: false,
                    disabled: true,
                    value: '2333',
                    id: 1
                }, {
                    selected: true,
                    disabled: false,
                    value: '13333333',
                    id: 1
                }, {
                    selected: false,
                    disabled: false,
                    value: 'ab33333aba',
                    id: 1
                }]
            },
            checkbox: {
                checked: false,
                text: '我已阅读用户协议'
            },
            form: {
                user: {
                    value: '',
                    placeHolder: 'input here',
                    title: '用户名:',
                    state: 'loading',
                    tip: ''
                },
                pass: {
                    value: '',
                    placeHolder: 'input here',
                    title: '密码:',
                    state: 'default',
                    tip: ''
                },
                bio: {
                    value: '',
                    placeHolder: 'input here',
                    title: '验证码:',
                    state: 'failed'
                }
            }
        }
    },
    components: {
        formItem,
        radonSelect,
        radonButton,
        radonButtonGroup,
        radonCheckbox,
        radonText,
        radonRadio
    },
    methods: {
        userInputing () {
            this.form.user.state = 'loading'

            setTimeout(() => {
                if (this.form.user.value.length < 6) {
                    this.form.user.state = 'failed'
                    this.form.user.tip = '该用户名已被使用'
                } else {
                    this.form.user.state = 'default'
                    this.form.user.tip = ''
                }
            }, 2000)
        },
        passInputing () {
            if (this.form.pass.value.length < 6) {
                this.form.pass.state = 'warning'
                this.form.pass.tip = '请输入数字和字母'
            } else {
                this.form.pass.state = 'default'
                this.form.pass.tip = ''
            }
        },
        failed (input) {
            this.createModal('网络错误', '无法连接到服务器', () => {
                input.state = 'default'
            }, () => {
                console.log('canceled')
            })
        }
    }
}
</script>
