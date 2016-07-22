

<template>
    <div class="rd-textfield-wrapper">
        <textarea 
            v-model="value"
            class="rd-textfield-input"
            @input="inputAction"
            @change="changeAction"
            @keyup.delete="delSize"
            :style="{ 'height': text.height + 'px' }"
        ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        bind: String,
        input: Function,
        change: Function,
        minHeight: {
            type: Number,
            default () {
                return 80
            }
        },
        lineHeight: {
            type: Number,
            default () {
                return 14
            }
        },
        autoResize: {
            type: Boolean,
            default () {
                return true
            }
        }
    },
    data () {
        return {
            text: {
                $el: null,
                height: this.minHeight
            }
        }
    },
    ready () {
        this.text.$el = this.$el.getElementsByTagName('textarea')[0]
    },
    methods: {
        inputAction () {
            if (this.input) {
                this.input(this)
            }
            this.resize()
        },
        changeAction () {
            if (this.change) {
                this.change(this)
            }
        },
        delSize () {
            if (this.text.height + this.lineHeight > this.minHeight) {
                this.text.height = this.text.height - this.lineHeight
                this.resize()
            }
        },
        resize () {
            if (this.autoResize) {
                if (this.text.$el.scrollHeight > this.text.$el.offsetHeight) {
                    this.text.height = this.text.$el.scrollHeight + this.lineHeight
                }
            }
        }
    }
}
</script>