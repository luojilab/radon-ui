<style>
.ex-mark-text {
    display: none;
}
.marked p{
    max-width: 40rem;
}
.marked code {
    display: block;
    background: #f7f7f7;
    padding: 1rem;
    color: #999;
    font-size: .8rem;
    line-height: 1.2;
    overflow-x: auto;
    min-height: 3rem;
}
.marked pre {
    line-height: 1.5em;
    margin: 1rem 0;
}
.marked {
    font-size: .9rem;
    line-height: 1.8;
    color: #666;
    max-width: 40rem;
}
.marked h1 {
    font-size: 1.6rem;
}
.marked h2 {
    font-size: 1.2rem;
    position: relative;
}
.marked h3 {
    position: relative;
}
.marked h3::before {
    content: "#";
    color: #00BCD4;
    position: absolute;
    left: -1rem;
    top: -.3rem;
    font-size: 1.2em;
    font-weight: bold;
}
.marked blockquote {
    position: relative;
    font-size: 90%;
    color: #404040;
    border-left: 4px solid #67cdfb;
    padding-left: .8em;
    margin: 1em 0;
    background: #f8f8f8;
    padding: 1rem;
}
.marked blockquote p {
    margin: 0;
}
.marked blockquote::before {
    position: absolute;
    top: 14px;
    left: -12px;
    background-color: #67cdfb;
    color: #fff;
    content: "!";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
}
.marked ul, ol {
    padding: 0 2rem;
    list-style: inherit;
}
@media screen and (max-width: 768px) {
    .ex-card {
        margin: 0;
    }
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
