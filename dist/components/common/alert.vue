
<template>
    <div class="rd-alert-container">
        <div 
            class="rd-alert"
            :class="classType(alert)"
            v-for="alert in alerts"
        >
            <span 
                class="rd-alert-icon"
                :class="iconClass(alert)"
            ></span>
            <div class="rd-alert-body">
                <span class="rd-alert-title">{{alert.title}}</span>
                <p v-if="alert.content" class="rd-alert-content">{{alert.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { ICON_MAP } from '../utils'

export default {
    props: {
        alerts: Array
    },
    methods: {
        classType (alert) {
            let classList = {}
            classList[alert.state] = true
            if (!alert.content) {
                classList['small'] = true
            }
            return classList
        },
        iconClass (alert) {
            let classList = {}
            classList[ICON_MAP[alert.state]] = true
            return classList
        }
    }
}
</script>