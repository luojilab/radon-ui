<style>
@import '../../css/index';
.rd-alert {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 6px;
    color: #666;
    line-height: 1rem;
    margin-bottom: .2rem;
    padding: .5rem;
    .rd-alert-icon {
        font-size: 1.5rem;
    }

    .rd-alert-body {
        flex: 1;
        padding:  .5rem;
    }

    .ion-close-round {
        position: absolute;
        right: 4px;
        top: 4px;
        color: #ccc;
        cursor: pointer;
    }

    .rd-alert-title {
        font-size: 1rem;
    }
    .rd-alert-content {
        margin: .5rem 0 0 0;
        font-size: .8rem;
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

</style>
<template>
    <div v-for="alert in alerts" class="rd-alert" :class="classType(alert)" v-if="!alert.closed">
        <span v-if="alert.content" class="rd-alert-icon" :class="iconClass(alert)"></span>
        <div class="rd-alert-body">
            <span v-if="alert.title" class="rd-alert-title">{{alert.title}}</span>
            <p v-if="alert.content" class="rd-alert-content">{{alert.content}}</p>
        </div>
        <i class="ion-close-round" @click="handleClose($event, alert)"></i>
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
            return classList
        },
        iconClass (alert) {
            let classList = {}
            classList[ICON_MAP[alert.state]] = true
            return classList
        },
        handleClose (e, alert) {
            this.alerts.$remove(alert)
            this.$emit('close')
        }
    }
}
</script>
