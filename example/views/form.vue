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
        <radon-checkbox :checkbox="checkbox"></radon-checkbox>
        <form class="form">
            <div class="radon-form-item">
                <radon-text :textfield="form.user"></radon-text>
            </div>
            <div class="radon-form-item">
                <radon-text :textfield="form.pass"></radon-text>
            </div>
            <div class="radon-form-item">
                <radon-text :textfield="form.bio"></radon-text>
            </div>
        </form>
    </div>
</template>
<script>
import radonSelect from '../../src/components/form/select.vue'
import {
    radonButton,
    radonButtonGroup,
    radonCheckbox,
    radonText
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
                    title: 'user:',
                    state: 'loading'
                },
                pass: {
                    value: '',
                    placeHolder: 'input here',
                    title: 'user:',
                    state: 'warning',
                    tip: '请输入数字和字母'
                },
                bio: {
                    value: '',
                    placeHolder: 'input here',
                    title: 'user:',
                    state: 'failed'
                }
            }
        }
    },
    components: {
        radonSelect,
        radonButton,
        radonButtonGroup,
        radonCheckbox,
        radonText
    }
}
</script>
