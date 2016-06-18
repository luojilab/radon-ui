<style lang="scss">
@import '../../sass/index';
.rd-alert {
    position: relative;
    border-radius: 6px;
    color: #666;
    line-height: 1rem;
    margin-bottom: .2rem;
    padding: .5rem 1rem .5rem 3rem;
    .rd-alert-icon {
        font-size: 2rem;
        top: .5rem;
        left: .5rem;
    }
    .rd-alert-title {
        font-size: 1rem;
    }
    .rd-alert-content {
        margin: .5rem 0 0 0;
        font-size: .8rem;
    }
    &.small {
        padding: 0;
        .rd-alert-title {
            font-size: .8rem;
            line-height: 2rem;
            padding-left: 2rem;
        }
        .rd-alert-icon {
            line-height: 2rem;
            left: .5rem;
            font-size: 1rem;
            top: initial;
        }
    }
    &.success {
        border: 1px solid #e7f6e1;
        background-color: #f3faf0;
        .rd-alert-icon {
            color: #87d068;
        }
    }
    &.info {
        border: 1px solid #d5f1fd;
        background-color: #eaf8fe;
        .rd-alert-icon {
            color: #2db7f5;
        }
    }
    &.warning {
        border: 1px solid #fec;
        background-color: #fff7e6;
        .rd-alert-icon {
            color: #fa0;
        }
    }
    &.failed {
        border: 1px solid #fdc;
        background-color: #ffeee6;
        .rd-alert-icon {
            color: #f50;
        }
    }
}
.rd-alert-icon {
    position: absolute;
}
</style>
<template>
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
</template>
<script>
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
            switch (alert.state) {
            case 'success':
                classList['ion-checkmark-circled'] = true
                break
            case 'failed':
                classList['ion-close-circled'] = true
                break
            case 'warning':
                classList['ion-alert-circled'] = true
                break
            case 'info':
                classList['ion-information-circled'] = true
                break
            default:
                classList['ion-checkmark-circled'] = true
            }
            return classList
        }
    }
}
</script>