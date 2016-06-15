<style>
    .form {
        max-width: 540px;
    }
    .radon-form-item { 
        margin-bottom: 24px;
        color: #666;
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
            <form-item title="2333">
                <radon-text :textfield="form.user"></radon-text>
            </form-item>
            <div class="radon-form-item">
                <radon-text :textfield="form.user"></radon-text>
            </div>
            <div class="radon-form-item">
                <radon-text :textfield="form.pass"></radon-text>
            </div>
            <div class="radon-form-item">
                <radon-text :textfield="form.bio"></radon-text>
            </div>
            <div class="radon-form-item">
                <radon-checkbox :checkbox="checkbox"></radon-checkbox>
            </div>
            <div class="radon-from-item">
                <radon-radio></radon-radio>
            </div>
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
                text: 'check?box'
            },
            form: {
                user: {
                    value: '',
                    placeHolder: 'input here',
                    title: '用户名:',
                    state: 'loading'
                },
                pass: {
                    value: '',
                    placeHolder: 'input here',
                    title: '密码:',
                    state: 'warning',
                    tip: '请输入数字和字母'
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
    }
}
</script>
