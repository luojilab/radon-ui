export default {
    functional: true,
    render (h, context) {
        let textContent = ''
        for (let slot of context.children) {
            textContent += slot.text
        }
        return h('div', {
            class: ['marked'],
            domProps: {
                innerHTML: window.marked(textContent),
            }
        })
    }
}