
<template>
    <div 
        class="rd-timepicker-container" 
        @click.stop="togglePicker"
        :class="{ 'top': state.position === 'top' }"
    >
        <div class="rd-timepicker-value">
            <div class="rd-timepicker-value-input">
                {{timePicker.value ? timePicker.value : timePicker.placeholder}}
            </div>
            <i 
                @click.stop="clearValue" 
                class="rd-datepicker-clear ion-close-circled"
                v-show="state.pickerShow"
            ></i>
        </div>
        <div class="rd-timepicker-content" v-show="state.pickerShow">
            <div class="rd-timepicker-hour" v-el:hour>
                <div 
                    @click.stop="touchItem($event, 'hour', hour)"
                    class="rd-timepicker-item" 
                    v-for="hour in time.hours"
                    :class="{ 'select': hour.selected }"
                    v-el:time-hour
                >{{hour.value}}</div>
            </div>
            <div class="rd-timepicker-min" v-el:min>
                <div 
                    @click.stop="touchItem($event, 'min', min)"
                    class="rd-timepicker-item" 
                    v-for="min in time.mins"
                    :class="{ 'select': min.selected }"
                    v-el:time-min
                >{{min.value}}</div>
            </div>
            <div class="rd-timepicker-sec" v-el:sec>
                <div 
                    @click.stop="touchItem($event, 'sec', sec)"
                    class="rd-timepicker-item" 
                    v-for="sec in time.secs"
                    :class="{ 'select': sec.selected }"
                    v-el:time-sec
                >{{sec.value}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { pad } from '../utils'
const generateCount = (count) => {
    let list = []
    while (count) {
        count--
        list.unshift({
            selected: false,
            value: pad(count)
        })
    }
    return list
}

const timeValueParser = (value) => {
    if (/[0-2][0-9]:[0-6][0-9]:[0-6][0-9]/.test(value)) {
        return value.split(':')
    }
    let now = new Date()
    return [pad(now.getHours()), pad(now.getMinutes()), pad(now.getSeconds())]
}

export default {
    props: {
        timePicker: {
            type: Object
        }
    },
    data () {
        return {
            tmp: ['00', '00', '00'],
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
    mounted () {
        window.addEventListener('click', this.hide, false)
    },
    ready () {
        window.addEventListener('click', this.hide, false)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.hide)
    },
    methods: {
        parse () {
            this.tmp = timeValueParser(this.timePicker.value)
            this.selectByValue('hour', this.tmp[0])
            this.selectByValue('min', this.tmp[1])
            this.selectByValue('sec', this.tmp[2])
            this.scrollByItem('hour', this.tmp[0])
            this.scrollByItem('min', this.tmp[1])
            this.scrollByItem('sec', this.tmp[2])
            this.updateValue()
        },
        selectByValue (type, val) {
            this.clearByType(type)
            switch (type) {
            case 'hour':
                this.time.hours.forEach(item => {
                    if (item.value === val) {
                        item.selected = true
                    }
                })
                break
            case 'min':
                this.time.mins.forEach(item => {
                    if (item.value === val) {
                        item.selected = true
                    }
                })
                break
            case 'sec':
                this.time.secs.forEach(item => {
                    if (item.value === val) {
                        item.selected = true
                    }
                })
                break
            }
        },
        togglePicker (e) {
            if (this.$el.getBoundingClientRect().top < 320) {
                this.state.position = 'bottom'
            } else {
                this.state.position = 'top'
            }
            this.parse()
            this.state.pickerShow = !this.state.pickerShow
        },
        hide (e) {
            if (e.path.indexOf(this.$el) === -1) {
                this.state.pickerShow = false
            }
        },
        touchItem (e, type, obj) {
            this.clearByType(type)
            switch (type) {
            case 'hour':
                this.tmp[0] = obj.value
                break
            case 'min':
                this.tmp[1] = obj.value
                break
            case 'sec':
                this.tmp[2] = obj.value
                break
            }
            this.scrollByItem(type, obj.value)
            obj.selected = true
            this.updateValue()
            this.$emit('change', this.timePicker)
        },
        scrollByItem (type, val) {
            try {
                const $el = this.$els[type]
                $el.scrollTop = Math.floor(val) * 32
            } catch (e) {
                console.log(e)
            }
        },
        updateValue () {
            this.timePicker.value = this.tmp.join(':')
        },
        clearByType (type) {
            switch (type) {
            case 'hour':
                this.time.hours.forEach(item => {
                    item.selected = false
                })
                break
            case 'min':
                this.time.mins.forEach(item => {
                    item.selected = false
                })
                break
            case 'sec':
                this.time.secs.forEach(item => {
                    item.selected = false
                })
                break
            }
        },
        clearValue (e) {
            this.clearByType('hour')
            this.clearByType('min')
            this.clearByType('sec')
            this.timePicker.value = ''
        }
    }
}
</script>