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
    <rd-pagination @change="changePage" :total="pagination.total" :options="pagination.options"></rd-pagination>
    <mark>
        <textarea class="ex-mark-text">
### 代码
```html
 <rd-pagination @change="changePage" :total="pagination.total" :options="pagination.options"></rd-pagination>
```

```javascript
changePage (params) {
    this.$http.get('/mock/page', params)
        .then((res) => {
            let resData = res.data
            this.list = resData
            this.pagination.total = resData.total
        }, (error) => {
            console.error(error)
        })
}

```

### API 

total: Number


options: Object

```
options: {
    pageSize: 10,
    remote: {
        pageIndexName: 'pageIndex',
        pageSizeName: 'pageSize',
        offset: 0
    }
}
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
            list: [1, 2, 3],
            pagination: {
                total: 10,
                options: {
                    pageSize: 10,
                    remote: {
                        pageIndexName: 'pageIndex',
                        pageSizeName: 'pageSize',
                        offset: 0
                    }
                }
            }
        }
    },
    components: {
        rdPagination,
        Mark
    },
    methods: {
        changePage (params) {
            this.$http.get('/mock/page', params)
                .then((res) => {
                    let resData = res.data
                    this.list = resData
                    this.pagination.total = resData.total
                }, (error) => {
                    console.error(error)
                })
        }
    }
}
</script>
