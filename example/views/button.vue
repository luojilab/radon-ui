<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Button 按钮
按钮用于开始一个即时操作。

### 按钮类型
```html
<radon-button>default</radon-button>
<radon-button type="primary">primary</radon-button>
<radon-button type="ghost">ghost</radon-button>

```
        </textarea>
    </mark>
        <p>
            <radon-button>default</radon-button>
            <radon-button type="primary">primary</radon-button>
            <radon-button type="ghost">ghost</radon-button>
        </p>
    </div>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
### 按钮尺寸
```html
<radon-button type="primary" size="large">large</radon-button>
<radon-button type="primary">common</radon-button>
<radon-button type="primary" size="small">small</radon-button>

```
            </textarea>
        </mark>
        <p>
            <radon-button type="primary" size="large">large</radon-button>
            <radon-button type="primary">common</radon-button>
            <radon-button type="primary" size="small">small</radon-button>
        </p>
    </div>
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
### 图标
```html
<radon-button type="icon"><i class="ion-upload"></i></radon-button>
<radon-button><i class="ion-upload"></i>上传</radon-button>

```
        </textarea>
    </mark>
        <p>
            <radon-button type="icon"><i class="ion-upload"></i></radon-button>
            <radon-button><i class="ion-upload"></i>上传</radon-button>
        </p>
    </div>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
### 按钮组合
```html
<radon-button-group>
    <radon-button type="ghost">common</radon-button>
    <radon-button type="ghost">common</radon-button>
    <radon-button type="ghost">common</radon-button>
</radon-button-group>

```
            </textarea>
        </mark>
        <p>
            <radon-button-group>
                <radon-button type="ghost">common</radon-button>
                <radon-button type="ghost">common</radon-button>
                <radon-button type="ghost">common</radon-button>
            </radon-button-group>
        </p>
    </div>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
### loading
```html
<radon-button type="ghost" :loading="true">save</radon-button>

```
            </textarea>
        </mark>
        <p>
            <radon-button type="ghost" :loading="true">save</radon-button>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
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
        radonButtonGroup,
        mark
    }
}
</script>