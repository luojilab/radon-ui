<template>
<div class="ex-content">
    <h2></h2>
    <div class="ex-card">
        <mark>
            <textarea class="ex-mark-text">
# Upload 上传组件

## 示例
            </textarea>
        </mark>
        <p>
            <rd-upload @add="addFileAction" accept="image/*" @remove="removeFileAction"></rd-upload>
        </p>
        <mark>
            <textarea class="ex-mark-text">

```
<rd-upload  
    accept="image/*" 
    @add="addFileAction" 
    @remove="removeFileAction"
></rd-upload>
```

```
methods: {
    addFileAction (newFile, list) {
        console.log('add', file)
        let formData = new FormData()
        formData.append('file', newFile.file, newFile.file.name)
        this.$http.post('/upload/attachment/imgup', formData)
        .then(res => {
            console.log('success')
        })
        .catch(console.log)
    },
    removeFileAction (item) {
        console.log('remove', item)
    }
}
```
### API

`Prop`：

| 参数            | 类型   | 说明           |
| :------------- |:-------|:--------------|
| accept         | String | file 类型（.jpg,.png,.doc） |

`Event`：

| 参数            | 类型   | 参数             | 说明          |
| :------------- |:-------|:----------------|:--------------|
| add            | Event  | file, fileList  | *1            |
| remove         | Event  | file            | 移除的文件对象  |

 *1. 第一个参数为新的文件对象，包含 file 和 src 属性，第二个为当前所有选择文件列表

 ```
{
    file: File, // File Object, 
    src: 'blob:http://127.0.0.1:9090/23565ed3-fbb8-4252-848f-24518022cbb2' // preview src
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
    rdUpload
} from 'radon-ui'

export default {
    data () {
        return {
        }
    },
    components: {
        rdUpload,
        Mark
    },
    methods: {
        addFileAction (file, list) {
            console.log('add', file)
        },
        removeFileAction (item) {
            console.log('remove', item)
        }
    }
}
</script>