
<template>
    <div class="rd-breadcrumb-container">
        <span 
            class="rd-breadcrumb-item"
            v-for="item in breadcrumb"
            @click="callRoute(item)"
        >
            <i v-if="item.icon" :class="iconClass(item.icon)"></i>
            <span class="rd-breadcrumb-text">{{item.value}}</span>
            <span class="rd-breadcrumb-separator">{{separator}}</span>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        separator: {
            type: String,
            default () {
                return '/'
            }
        },
        breadcrumb: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        iconClass (icon) {
            let classList = {}
            classList[icon] = true
            return classList
        },
        callRoute (item) {
            if (item.route) {
                this.$route.router.go(item.route)
            }
        }
    }
}
</script>