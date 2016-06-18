<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Cascader 级联选择

## 代码
```javascript
export default {
    template: '<radon-modal :modal="modal"></radon-modal>',
    data () {
        return {
            modal: {
                show: false,
                title: '',
                content: '',
                cancel: () => {},
                confirm: () => {}
            }
        }
    },
    components: {
        radonModal
    },
    methods: {
        createModal (title, text, confirm, cancel) {
            this.modal = {
                show: true,
                title: title,
                content: text,
                cancel: cancel,
                confirm: confirm
            }
        },
        open () {
            this.createModal(
                '这里是标题',
                '这里应该说点什么',
                () => {
                    window.alert('你点击了确认')
                },
                () => {
                    window.alert('点点击了取消')
                }
            )
        }
    }
}
```
## 示例

        </textarea>
    </mark>
        <p>
            <radon-button @click="open">开启对话框</radon-button>
        </p>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    radonButton
} from '../../src/components/index'

export default {
    props: {
        createModal: Function
    },
    data () {
        return {}
    },
    components: {
        radonButton,
        mark
    },
    methods: {
        open () {
            this.createModal(
                '这里是标题',
                '这里应该说点什么',
                () => {
                    window.alert('你点击了确认')
                },
                () => {
                    window.alert('点点击了取消')
                }
            )
        }
    }
}
</script>