
<template>
    <ul class="rd-timeline-container">
        <li class="rd-timeline-item" v-for="item in timeline">
            <span 
                class="rd-timeline-icon-dot"
                :class="itemIcon(item)"
                :style="{
                    'border-color': item.color,
                    'color': item.color
                }"
            ></span>
            <span class="rd-timeline-text">{{item.text}}</span>
            <div class="rd-timeline-item-tail"></div>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        timeline: Array
    },
    methods: {
        itemIcon (item) {
            if (item.icon) {
                let className = {}
                className[item.icon] = true
                return className
            }
            return {
                'rd-timeline-icon-circle': true
            }
        }
    }
}
</script>