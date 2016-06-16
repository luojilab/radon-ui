<template>
<div class="ex-content">
    <h2>Checkbox 多选框</h2>
    <div class="ex-card">
        <h3>按钮类型</h3>
        <p>简单的checkbox</p>
        <p class="ex-code">
            <mark :mark="code.a"></mark>
        </p>
        <p>
            <radon-checkbox :checkbox="checkbox"></radon-checkbox>
            <radon-checkbox :checkbox="checkA"></radon-checkbox>

        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    radonCheckbox
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {
            checkbox: {
                checked: false,
                text: '我已阅读用户协议'
            },
            checkA: {
                checked: false,
                text: '同意服务条款'
            },
            code: {
                a: '```\n' +
                'export default {\n' +
                '       template: "<radon-checkbox :checkbox="checkbox"></radon-checkbox>"\n' +
                '        data () {\n' +
                '            return {\n' +
                '                checkbox: {\n' +
                '                    checked: false,\n' +
                '                    text: "我已阅读用户协议"\n' +
                '                }\n' +
                '            }\n' +
                '        },\n' +
                '        components: {\n' +
                '           radonCheckbox\n' +
                '        }\n' +
                '    }\n' +
                '```'
            }
        }
    },
    components: {
        radonCheckbox,
        mark
    }
}
</script>