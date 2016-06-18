```
export default {
       template: ‘<radon-checkbox :checkbox="checkbox"></radon-checkbox>’
        data () {
            return {
                checkbox: {
                    checked: false,
                    text: "我已阅读用户协议"
                }
            }
        },
        components: {
           radonCheckbox
        }
    }
```