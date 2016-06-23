<style>
.ex-mark-text {
    display: none;
}
.marked code {
    display: block;
    background: #f7f7f7;
    padding: 1rem;
    color: #999;
    font-size: .8rem;
    line-height: 1.2;
    overflow-x: auto;
}
.marked {
    font-size: .9rem;
    line-height: 1.8;
    color: #666;
}
.marked h1 {
    font-size: 1.6rem;
}
.marked h2 {
    font-size: 1.2rem;
}
.marked blockquote {
    font-size: 90%;
    color: #999;
    border-left: 4px solid #e9e9e9;
    padding-left: .8em;
    margin: 1em 0;
    font-style: italic;
}
.marked ul, ol {
    padding: 0 2rem;
    list-style: inherit;
}
</style>
<template>
    <div class="marked">
        <div>
            {{{mark}}}
        </div>
        <slot></slot>
    </div>
</template>
<script>
const HTMLDeCode = (str) => {
    const div = document.createElement('div')
    div.innerHTML = str
    return div.innerText || div.textContent
}

export default {
    data () {
        return {
            mark: ''
        }
    },
    ready () {
        this.mark = window.marked((HTMLDeCode(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML)))
    }
}
</script>
