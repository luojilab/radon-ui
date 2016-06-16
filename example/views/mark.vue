<style>
    
</style>
<template>
    <div class="marked">
        {{{markMe(mark)}}}
    </div>
</template>
<script>
    import marked from 'marked'
    export default {
        props: {
            mark: String
        },
        methods: {
            markMe (str) {
                return marked(str)
            }
        }
    }
</script>