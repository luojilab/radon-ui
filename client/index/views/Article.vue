<template>
    <div>
        <div class="content home">
             <div class="readme">
                <a href="https://github.com/hilongjw/vue-ssr">
                    <h2>Vue SSR</h2>
                </a>
                 <p>
                     Use Vue 2.0 server-side rendering with Express
                 </p>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Article',
    serverCacheKey: () => 'tag'
}
</script>