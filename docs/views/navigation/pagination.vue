<template>
<div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Pagination分页插件
> 作为分页插件使用，可以直接挂钩数据字段，不需要在手动自己更新数据和页面

### 示例
        </textarea>
    </mark>
    <div class="list" style="margin-bottom: 10px;">
        <span v-for="item in list" style="background: #ccc; margin-right: 10px;">{{item}}</span>
    </div>
    <rd-pagination :page-data.sync="list" url="/mock/page" data-key='data'></rd-pagination>
    <mark>
        <textarea class="ex-mark-text">
### 代码
```html
 <rd-pagination :page-data.sync="list" url="/mock/page" data-key='data'></rd-pagination>
```
```
list: [1, 2, 3]  
* 这里的list和 page-data对应起来。 
* url表示你要请求的服务接口。 
* data-key 是返回json数据的关键字
```

        </textarea>
    </mark>
</div>
</template>
<script>
import { Mark } from '../index'
import { rdPagination } from 'radon-ui'

export default {
    data () {
        return {
            list: [1, 2, 3]
        }
    },
    components: {
        rdPagination,
        Mark
    }
}
</script>
