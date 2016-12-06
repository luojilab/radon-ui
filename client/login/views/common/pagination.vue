<template>
<div class="ex-card">
    <rd-mark>
# Pagination分页插件
> 作为分页插件使用，可以直接挂钩数据字段，不需要在手动自己更新数据和页面

### 示例
    </rd-mark>
    <div class="list" style="margin-bottom: 10px;">
        <span v-for="item in list" style="background: #ccc; margin-right: 10px;">{{item}}</span>
    </div>
    <pagination :page-data.sync="list" url="/mock/page" data-key='data'></pagination>
    <rd-mark>
### 代码
```html
 {{code.one}}
```
```
list: [1, 2, 3]  
* 这里的list和 page-data对应起来。 
* url表示你要请求的服务接口。 
* data-key 是返回json数据的关键字
```
    </rd-mark>
</div>
</template>
<script>
import { rdMark } from '../index'
import Pagination from 'src/components/navigation/pagination.vue'

export default {
    data () {
        return {
            code: {
                one: `<pagination :page-data.sync="list" url="/mock/page" data-key='data'></pagination>`
            },
            list: [1, 2, 3]
        }
    },
    components: {
        Pagination,
        rdMark
    }
}
</script>
