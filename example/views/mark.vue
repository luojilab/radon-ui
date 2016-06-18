<style>
.ex-mark-text {
    display: none;
}
.marked code {
    display: block;
    background: #4a4a4a;
    padding: 1rem;
    color: #ffffff;
    font-size: .8rem;
    line-height: 1.2;
    width: 60rem;
    overflow-x: auto;
}
</style>
<template>
    <div class="marked">
        <slot></slot>
        <div>
            {{{mark}}}
        </div>
    </div>
</template>
<script>
import marked from 'marked'
import highlight from 'highlight.js'

const HTMLDeCode = (str) => {
    const div = document.createElement('div')
    div.innerHTML = str
    return div.innerText || div.textContent
}

marked.setOptions({
    highlight: function (code) {
        return highlight.highlightAuto(code).value
    }
})

export default {
    data () {
        return {
            mark: ''
        }
    },
    ready () {
        this.mark = marked((HTMLDeCode(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML)))
    },
    methods: {
        markMe (str) {
            return marked(str)
        }
    }
}
</script>
