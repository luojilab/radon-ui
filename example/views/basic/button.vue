<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Button 按钮
按钮用于开始一个即时操作。

### 按钮类型
```html
<radon-button>默认按钮</radon-button>
<radon-button type="primary">推荐按钮</radon-button>
<radon-button type="ghost">幽灵按钮</radon-button>

```
        </textarea>
    </mark>
        <p>
            <radon-button>默认按钮</radon-button>
            <radon-button type="primary">推荐按钮</radon-button>
            <radon-button type="ghost">幽灵按钮</radon-button>
            <radon-button type="ghost" :disabled="true">幽灵按钮(失效)</radon-button>
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
            <radon-button type="primary" size="large">Large</radon-button>
            <radon-button type="primary">Common</radon-button>
            <radon-button type="primary" size="small">Small</radon-button>
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
<radon-button type="ghost" :loading="true">保存</radon-button>

```
            </textarea>
        </mark>
        <p>
            <radon-button type="ghost" :loading="true">保存</radon-button>
        </p>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    formItem,
    radonButton,
    radonButtonGroup
} from '../../../src/components/index'

export default {
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
        Mark
    }
}
</script>