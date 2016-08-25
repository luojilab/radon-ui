<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Breadcrumb面包屑
> 显示当前页面在系统层级结构中的位置，并能向上返回。
 * 当系统拥有超过两级以上的层级结构时；
 * 当需要告知用户『你在哪里』时；
 * 当需要向上导航的功能时。

### 示例
        </textarea>
    </mark>
    <p>
        <rd-breadcrumb :breadcrumb="breadcrumb.list" separator="/"></rd-breadcrumb>
    </p>
    <mark>
        <textarea class="ex-mark-text">
### 代码

```javascript
import {
    rdBreadcrumb
} from 'radon-ui'

```
```html
<rd-breadcrumb :breadcrumb="breadcrumb.list" separator="/"></rd-breadcrumb>
```
```
breadcrumb: {
    separator: '/',
    list: [{
        icon: 'ion-home',
        value: '首页',
        route: {
            path: '/'
        }
    }, {
        icon: 'ion-document',
        value: '订单',
        route: {
            path: '/form/checkbox'
        }
    }, {
        value: '订单查询',
        route: {
            path: '/navigation/breadcrumb'
        }
    }]
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
    rdBreadcrumb
} from 'radon-ui'

export default {
    data () {
        return {
            breadcrumb: {
                separator: '/',
                list: [{
                    icon: 'ion-home',
                    value: '首页',
                    route: {
                        path: '/'
                    }
                }, {
                    icon: 'ion-document',
                    value: '订单',
                    route: {
                        path: '/button'
                    }
                }, {
                    value: '订单查询',
                    route: {
                        path: '/form'
                    }
                }]
            }
        }
    },
    components: {
        rdBreadcrumb,
        Mark
    }
}
</script>