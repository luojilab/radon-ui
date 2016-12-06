<template>
<div class="ex-content">
    <div class="ex-card">
    <rd-mark>
# Tree 树组件

树组件，文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树组件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
    </rd-mark>

        <p>
            <rd-tree :tree-data="treeData"></rd-tree>
        </p>

    <rd-mark>
        <textarea class="ex-mark-text">
## 代码

```
{{code.one}}
```

```javascript
export default {
    data () {
        return {
            treeData: [{
                expand: false,
                checked: false,
                title: '根',
                key: 'root',
                children: [{
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf',
                    children: [{
                        expand: false,
                        checked: false,
                        title: '叶子1',
                        key: 'leaf1'
                    }]
                }, {
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf'
                }, {
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf'
                }]
            }]
        }
    },
    components: {
        rdTree
    }
}
```
## API

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| expand         | Bolean       | 展开           |
| checked        | Bolean       | 选中            |
| title          | String       | 名称            |
| key            | String       | 区分树组件       |
| children       | Array        | 叶子节点数据     |


        </textarea>
    </rd-mark>
    </div>
</div>
</template>
<script>
import { rdMark } from '../index'
import {
    rdTree
} from 'radon-ui'

export default {
    data () {
        return {
            code: {
                one: '<rd-tree :tree-data="treeData"></rd-tree>'
            },
            treeData: [{
                expand: false,
                checked: false,
                title: '根',
                key: 'root',
                children: [{
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf',
                    children: [{
                        expand: false,
                        checked: false,
                        title: '叶子1',
                        key: 'leaf1'
                    }]
                }, {
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf'
                }, {
                    expand: false,
                    checked: false,
                    title: '叶子',
                    key: 'leaf'
                }]
            }]
        }
    },
    components: {
        rdTree,
        rdMark
    }
}
</script>