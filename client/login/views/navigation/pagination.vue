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
    <rd-pagination @change="changePage" :total="pagination.total" :options="pagination.options"></rd-pagination>
    <rd-mark>
### 代码
```html
 {{code}}
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
    </rd-mark>
</div>
</template>
<script>
import { rdMark } from '../index'
import { rdPagination } from 'radon-ui'

export default {
    data () {
        return {
            code: `<rd-pagination @change="changePage" :total="pagination.total" :options="pagination.options"></rd-pagination>`,
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
        rdMark
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
