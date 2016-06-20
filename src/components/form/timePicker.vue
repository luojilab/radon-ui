<style>
@import '../../css/base/base';
.rd-timepicker-container {
    position: relative;
    border: 1px solid $border-color-base;
    display: inline-block;
    min-width: 6rem;
    border-radius: $border-radius-base;
    height: 2rem;
    line-height: 2rem;
    padding: 0 2rem 0 .5rem;
    vertical-align: bottom;
    &.top .rd-timepicker-content {
        top: initial;
        bottom: 2rem;
    }
}
.rd-timepicker-value-input {
    border: 0;
    height: 100%;
    outline: 0;
}   
</style>
<template>
    <div class="rd-timepicker-container" click="togglePicker">
        <div class="rd-timepicker-value">
            <input type="text" class="rd-timepicker-value-input">
            <i 
                @click.stop="clearValue" 
                class="rd-datepicker-clear ion-close-circled"
                v-show="state.pickerShow"
            ></i>
        </div>
        <div class="rd-timepicker-content" v-show="state.pickerShow">
            <div class="rd-timepicker-hour">
                <div class="rd-timepicker-item" v-for="hour in time.hours">{{hour}}</div>
            </div>
            <div class="rd-timepicker-min">
                <div class="rd-timepicker-item" v-for="min in time.mins">{{min}}</div>
            </div>
            <div class="rd-timepicker-sec">
                <div class="rd-timepicker-item" v-for="sec in time.secs">{{sec}}</div>
            </div>
        </div>
    </div>
</template>
<script>
const generateCount = (count) => {
    let list = []
    while (count) {
        count--
        list.unshift(count)
    }
    return list
}
export default {
    data () {
        return {
            value: '',
            state: {
                position: 'buttom',
                pickerShow: false
            },
            time: {
                hours: generateCount(24),
                mins: generateCount(60),
                secs: generateCount(60)
            }
        }
    },
    methods: {
        togglePicker (e) {
            if (e.clientY + document.body.scrollTop + 320 > document.body.offsetHeight) {
                this.state.position = 'top'
            } else {
                this.state.position = 'bottom'
            }
            this.parse(this.value, this.options.format)
            this.state.pickerShow = !this.state.pickerShow
        },
        clearValue (e) {
            this.value = ''
        }
    }
}
</script>