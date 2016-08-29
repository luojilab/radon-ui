<style>
@import '../../css/index';
.rd-timeline-container {
    list-style: none;
    margin: 0;
    padding: 0;
}
.rd-timeline-item {
    position: relative;
    padding: 0 0 2rem 1.5rem;
    &:last-child {
       .rd-timeline-item-tail {
            display: none;
       } 
    }
}
.rd-timeline-icon-dot {
    position: absolute;
    left: .1rem;
    top: .1rem;
    font-size: 1rem;
    z-index: 1;
    display: inline-block;
    height: .9rem;
    width: .9rem;
    border-radius: 50%;
    background-color: #fff;
    transtion: opcity .2s;
}
.rd-timeline-icon-dot:hover {
    opacity: 0.8;
}
.rd-timeline-icon-circle {
    background: rgba(255, 255, 255, 0.92);
    border: .15rem solid #2db7f5;
}
.rd-timeline-item-tail {
    position: absolute;
    left: .475rem;
    top: .2rem;
    height: 100%;
    border-left: .15rem solid #e9e9e9;
}
.rd-timeline-text {
    font-size: .8rem;
    color: #5d5c5c;
}
</style>
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