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
