<template>
<div class="ex-content">
    <div class="ex-card">
     <mark>
        <textarea class="ex-mark-text">
# Cascader 级联选择
级联选择框。

## 何时使用

 - 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
 - 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
 - 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。
        </textarea>
    </mark>
        <p>
            <rd-cascader :cascader="cascader"></rd-cascader>
        </p>
    <mark>
        <textarea class="ex-mark-text">
# API

## cascader 
cascader 是级联组件的数据对象，它有选项数组 options 和 结果数组 valueArr
```
cascader: {
    options: options,
    valueArr: []
}

<rd-cascader :cascader="cascader"></rd-cascader>
```
## options
options 带选取的级联数据
```
const options = [{
    // label 是级联选项展示值
    label: '中国',

    // value 是对象自定义属性
    value: 'china',
    // 也可以自定义其他属性
    sku: '2234234',
    id: 'j4jb345jb34j5',

    // 该对象的子选项数组
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}]
```
## valueArr
选择结果数组

```
// 比如一次选择 美国 加利福尼亚 洛杉矶 valueArr会得到这样的数组
valueArr: [{
    value: 'America',
    label: '美国'
}, {
    value: 'California',
    label: '加利福尼亚'
}, {
    value: 'Los Angeles',
    label: '洛杉矶'
}]
```

        </textarea>
    </mark>
    <mark>
        <textarea class="ex-mark-text">
## 完整示例代码
```javascript
const options = [{
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}]

export default {
    template: '<rd-cascader :cascader="cascader"></rd-cascader>',
    data () {
        return {
            cascader: {
                options: options,
                valueArr: []
            }
        }
    },
    components: {
        rdCascader
    }
}
```
        </textarea>
    </mark>

    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdCascader
} from 'radon-ui'

const options = [{
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}, {
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}, {
    value: 'china',
    label: '中国',
    children: [{
        value: 'sichuan',
        label: '四川',
        children: [{
            value: 'chegndu',
            label: '成都'
        }, {
            value: 'deyang',
            label: '德阳'
        }]
    }]
}, {
    value: 'America',
    label: '美国',
    children: [{
        value: 'California',
        label: '加利福尼亚',
        children: [{
            value: 'lake',
            label: '湖'
        }, {
            value: 'Los Angeles',
            label: '洛杉矶'
        }]
    }, {
        value: 'Delaware',
        label: '特拉华',
        children: [{
            value: 'Dover',
            label: '多佛'
        }]
    }]
}]

export default {
    data () {
        return {
            cascader: {
                options: options,
                valueArr: []
            }
        }
    },
    components: {
        rdCascader,
        Mark
    }
}
</script>