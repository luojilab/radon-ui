<style>
@import '../../css/index';
.rd-notification-container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
}
.rd-notification {
    position: relative;
    width: 20rem;
    background-color: #fff;
    margin-right: 1rem;
    border: 1px solid #eaf8fe;
    border-radius: 4px;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    &.success,
    &.warning,
    &.failed,
    &.info {
        padding-left: 4rem;
    }
    &.success {
        .rd-notification-icon {
            color: #87d068;
        }
    }
    &.info {
        .rd-notification-icon {
            color: #2db7f5;
        }
    }
    &.warning {
        .rd-notification-icon {
            color: #fa0;
        }
    }
    &.failed {
        .rd-notification-icon {
            color: #f50;
        }
    }
}
.rd-notification-title {
    font-size: .9rem;
}
.rd-notification-content {
    color: #999;
    font-size: .8rem;
    line-height: 1.5;
    margin: 0;
}
.rd-notification-close {
    position: absolute;
    top: .2rem;
    right: .5rem;
    font-size: .8rem;
    color: #ccc;
}
.rd-notification-close:hover {
    color: #969696;
}
.rd-notification-icon{
    position: absolute;
    top: 50%;
    font-size: 1.5rem;
    left: 1rem;
    margin-top: -.75rem;
    line-height: 1.5rem;
}
.notification-transition {
    transition: opacity .5s ease;
}
.notification-enter {
    opacity: 0;
}
.notification-leave {
    opacity: 0;
    position: absolute;
}
.notification-move {
    transition: transform .5s cubic-bezier(.55,0,.1,1);
}
@media screen and (max-width: 768px) {
    .rd-notification-container {
        top: 0;
        right: 0;
        width: 100%;
        padding: 1rem 2rem;
        box-sizing: border-box;
    }
    .rd-notification {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
<template>
    <div class="rd-notification-container" v-show="notifications.length">
        <div 
            class="rd-notification" 
            v-for="item in notifications"
            :class="typeClass(item)"
            transition="notification"
        >
            <span class="rd-notification-icon" :class="iconClass(item)"></span>
            <span class="rd-notification-title">{{item.title}}</span>
            <p class="rd-notification-content">{{item.content}}</p>
            <span class="rd-notification-close ion-close-round" @click="closeItem(item)"></span>
        </div>
    </div>
</template>
<script>
import { ICON_MAP } from '../utils'
export default {
    computed: {
        notifications () {
            return window.RADON_EVENT_BUS.RADON_NOTIFICATION
        }
    },
    methods: {
        typeClass (item) {
            if (!item.type) {
                return {
                    'rd-notification-info': true
                }
            }
            let classList = {}
            classList[item.type] = true
            return classList
        },
        iconClass (item) {
            if (!item.type || !ICON_MAP[item.type]) {
                return {
                    'rd-notification-noicon': true
                }
            }
            let classList = {}
            classList[ICON_MAP[item.type]] = true
            return classList
        },
        closeItem (item) {
            this.notifications.$remove(item)
        }
    }
}
</script>
