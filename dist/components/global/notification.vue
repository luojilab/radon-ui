
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
