<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Modal 弹窗
模态对话框。
## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时
```
this.$Modal.create(title:String, content:String, onConfirm:Function, onCancle:Function)
```
## 示例
        </textarea>
    </mark>
    <p>
        <radon-button @click="open">开启对话框</radon-button>
    </p>
    <mark>
        <textarea class="ex-mark-text">
## 示例代码
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
        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import mark from './mark.vue'
import {
    radonButton
} from '../../src/components/index'

export default {
    data () {
        return {}
    },
    components: {
        radonButton,
        mark
    },
    methods: {
        open () {
            this.$Modal.create(
                '这里是标题',
                '这里应该说点什么',
                () => {
                    this.$Notification.success('你点击了确认', '你点击了确认你点击了确认你点击了确认你点击了确认你点击了确认', 5000)
                },
                () => {
                    this.$Notification.success('你点击了取消', '', 5000)
                }
            )
        }
    }
}
</script>