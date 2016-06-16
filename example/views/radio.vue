<template>
<div class="ex-content">
    <h2>Radio 单选框</h2>
    <div class="ex-card">
        <h3>按钮类型</h3>
        <p>简单的checkbox</p>
        <p class="ex-code">
        export default { <br>
        &nbsp;&nbsp;template: '&lt;radon-checkbox :checkbox=&quot;checkbox&quot;&gt;&lt;/radon-checkbox&gt;'<br>
        &nbsp;&nbsp;data () {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;return {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checkbox: {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checked: false,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: '我已阅读用户协议'<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;},<br>
        &nbsp;&nbsp;components: {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;radonCheckbox<br>
        &nbsp;&nbsp;}<br>
        }<br>
        </p>
        <p>
            <radon-radio :radios="radios"></radon-radio>
        </p>
    </div>
</div>
</template>
<script>
import {
    radonRadio
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {
            radios: [{
                checked: false,
                value: 'A'
            }, {
                checked: false,
                value: 'B'
            }, {
                checked: false,
                value: 'C'
            }, {
                checked: false,
                value: 'aa'
            }]
        }
    },
    components: {
        radonRadio
    }
}
</script>