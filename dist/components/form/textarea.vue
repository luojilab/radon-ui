

<template>
    <div class="rd-textfield-wrapper">
        <textarea 
            v-model="inputValue"
            class="rd-textfield-input"
            @input="inputAction"
            @keyup.delete="delSize"
            :style="{ 'height': text.height + 'px' }"
        ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        textfield: {
            type: Object
        }
    },
    data () {
        return {
            text: {
                $el: null,
                height: this.textfield.minHeight || 80,
                lineHeight: this.textfield.lineHeight || 14,
                minHeight: this.textfield.minHeight || 80
            }
        }
    },
    computed: {
        inputValue: {
            get () {
                return this.textfield.value
            },
            set (newVal) {
                this.textfield.value = newVal
            }
        }
    },
    ready () {
        this.text.$el = this.$el.getElementsByTagName('textarea')[0]
    },
    mounted () {
        this.text.$el = this.$el.getElementsByTagName('textarea')[0]
    },
    methods: {
        inputAction () {
            this.resize()
        },
        delSize () {
            if (this.text.height + this.text.lineHeight > this.text.minHeight) {
                this.text.height = this.text.height - this.text.lineHeight
                this.$nextTick(() => {
                    this.resize()
                })
            }
        },
        resize () {
            if (this.textfield.autoResize !== undefined &&
                this.text.$el.scrollHeight > this.text.$el.offsetHeight) {
                this.text.height = this.text.$el.scrollHeight + this.text.lineHeight
            }
        }
    }
}
</script>