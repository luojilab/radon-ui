<template>
    <div>
        <div class="content home">
             it's fake Login
             <button @click="refresh"> refresh </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    serverCacheKey: () => 'login',
    methods: {
        refresh () {
            location.reload()
        }
    }
}
</script>