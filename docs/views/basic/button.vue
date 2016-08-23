<style>
    .button-doc p .rd-btn{
        margin-top: .5rem;
    }
</style>
<template>
<div class="ex-content button-doc">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Button 按钮
按钮用于开始一个即时操作。

### 按钮类型
```html
<rd-button>默认按钮</rd-button>
<rd-button type="primary">推荐按钮</rd-button>
<rd-button type="ghost">幽灵按钮</rd-button>
<rd-button type="ghost" :disabled="true">幽灵按钮(失效)</rd-button>
<rd-button type="success">Success</rd-button>
<rd-button type="info">Info</rd-button>
<rd-button type="warning">Warning</rd-button>
<rd-button type="danger">Danger</rd-button>

```
        </textarea>
    </mark>
        <p>
            <rd-button>默认按钮</rd-button>
            <rd-button type="primary">推荐按钮</rd-button>
            <rd-button type="ghost">幽灵按钮</rd-button>
            <rd-button type="ghost" :disabled="true">幽灵按钮(失效)</rd-button>
            <rd-button type="success">Success</rd-button>
            <rd-button type="info">Info</rd-button>
            <rd-button type="warning">Warning</rd-button>
            <rd-button type="danger">Danger</rd-button>
        </p>
    </div>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
### 按钮尺寸
```html
<rd-button type="primary" size="large">large</rd-button>
<rd-button type="primary">common</rd-button>
<rd-button type="primary" size="small">small</rd-button>

```
            </textarea>
        </mark>
        <p>
            <rd-button type="primary" size="large">Large</rd-button>
            <rd-button type="primary">Common</rd-button>
            <rd-button type="primary" size="small">Small</rd-button>
        </p>
    </div>
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
### 图标
```html
<rd-button icon="ion-upload"></rd-button>
<rd-button type="primary" icon="ion-ios-search-strong"></rd-button>
<rd-button icon="ion-ios-search-strong"></rd-button>
<rd-button><i class="ion-upload"></i>上传</rd-button>


```
        </textarea>
    </mark>
        <p>
            <rd-button icon="ion-upload"></rd-button>
            <rd-button icon="ion-social-github"></rd-button>
            <rd-button type="primary" icon="ion-ios-search-strong"></rd-button>
            <rd-button icon="ion-ios-search-strong"></rd-button>
            <rd-button><i class="ion-social-github"></i>Github</rd-button>
            <rd-button><i class="ion-upload"></i>上传</rd-button>
        </p>
    </div>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
### 按钮组合
```html
<rd-button-group>
    <rd-button>common</rd-button>
    <rd-button>common</rd-button>
    <rd-button>common</rd-button>
</rd-button-group>

```
            </textarea>
        </mark>
        <p>
            <rd-button-group>
                <rd-button>common</rd-button>
                <rd-button>common</rd-button>
                <rd-button>common</rd-button>
            </rd-button-group>
        </p>
    </div>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
### loading
```html
<rd-button :loading="true">保存</rd-button>

```
            </textarea>
        </mark>
        <p>
            <rd-button :loading="true">保存</rd-button>
        </p>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    formItem,
    rdButton,
    rdButtonGroup
} from 'radon-ui'

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
        rdButton,
        rdButtonGroup,
        Mark
    }
}
</script>