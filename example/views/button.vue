<template>
<div class="ex-content">
    <h2>Button 按钮</h2>
    <p>按钮用于开始一个即时操作。</p>
    <div class="ex-card">
        <h3>按钮类型</h3>
        <p class="ex-code">
            &lt;radon-button type=&quot;primary&quot;&gt;primary&lt;/radon-button&gt;
        </p>
        <p>
            <radon-button>default</radon-button>
            <radon-button type="primary">primary</radon-button>
            <radon-button type="ghost">ghost</radon-button>
        </p>
    </div>
    <div class="ex-card">
        <h3>图标</h3>
        <p class="ex-code">
           &lt;radon-button type=&quot;icon&quot;&gt;&lt;i class=&quot;ion-upload&quot;&gt;&lt;/i&gt;&lt;/radon-button&gt;
        </p> 
        </p>
        <p>
            <radon-button type="icon"><i class="ion-upload"></i></radon-button>
        </p>
    </div>
    <div class="ex-card">
        <h3>按钮尺寸</h3>
        <p class="ex-code">
            size="large" or size="small"
        </p>
        <p>
            <radon-button type="primary" size="large">large</radon-button>
            <radon-button type="primary">common</radon-button>
            <radon-button type="primary" size="small">small</radon-button>
        </p>
    </div>
    <div class="ex-card">
        <h3>按钮组合</h3>
        <p class="ex-code">
            &lt;radon-button-group&gt; <br/>
                &lt;radon-button type=&quot;ghost&quot;&gt;common&lt;/radon-button&gt;<br/>
                &lt;radon-button type=&quot;ghost&quot;&gt;common&lt;/radon-button&gt;<br/>
                &lt;radon-button type=&quot;ghost&quot;&gt;common&lt;/radon-button&gt;<br/>
            &lt;/radon-button-group&gt;
        </p>
        <p>
            <radon-button-group>
                <radon-button type="ghost">common</radon-button>
                <radon-button type="ghost">common</radon-button>
                <radon-button type="ghost">common</radon-button>
            </radon-button-group>
        </p>
    </div>
    <div class="ex-card">
        <h3>loading</h3>
        <p class="ex-code">
            &lt;radon-button type=&quot;ghost&quot; :loading=&quot;true&quot;&gt;save&lt;/radon-button&gt;
        </p>
        <p>
            <radon-button type="ghost" :loading="true">save</radon-button>
        </p>
    </div>
</div>
</template>
<script>
import {
    formItem,
    radonButton,
    radonButtonGroup
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {
            button: {
                type: 1
            }
        }
    },
    components: {
        formItem,
        radonButton,
        radonButtonGroup
    }
}
</script>