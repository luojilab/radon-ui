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
            <rd-upload @add="addFileAction" @remove="removeFileAction"></rd-upload>
        </p>
        <mark>
            <textarea class="ex-mark-text">
## API

### add
> Event: Function

```html
<rd-upload @add="addFileAction"></rd-upload>
```
```javascript
addFileAction (list) {
    console.log(list) 
    // [{
    //     file: File, // File Object
    //     src: 'blob:http://127.0.0.1:9090/23565ed3-fbb8-4252-848f-24518022cbb2' // preview src
    // }]
}
```

### remove
> Event: Function

```html
<rd-upload @remove="removeFileAction"></rd-upload>
```
```
removeFileAction (item) {
    console.log(item) // will remove file 
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
} from '../../../src/components/index'

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
        addFileAction (list) {
            console.log(list)
        },
        removeFileAction (item) {
            console.log(item)
        }
    }
}
</script>