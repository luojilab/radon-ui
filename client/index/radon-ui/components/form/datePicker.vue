<style>
@import '../../css/base/base';
.rd-datepicker-container {
    position: relative;
    border: 1px solid $border-color-base;
    display: inline-block;
    min-width: 6rem;
    border-radius: $border-radius-base;
    height: 2rem;
    line-height: 2rem;
    padding: 0 .5rem 0 .5rem;
    vertical-align: bottom;
    width: 100%;
    box-sizing: border-box;
    &.top .rd-datepicker-content {
        top: initial;
        bottom: 2rem;
    }
    &.disabled {
        color: #888;
        background-color: #f9f9f9;
        border-color: #e7e7e7;
    }
}
.rd-datepicker-days {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    width: 13rem;
    height: 14rem;
    font-size: .8rem;
    padding: 0 .5rem;
}
.rd-datepicker-list {
    background-color: #fff;
    width: 13rem;
    font-size: .8rem;
    text-align: center;
    height: 14rem;
    overflow-y: auto;
}
.rd-datepicker-list-item:hover {
    background: #f3f2f2;
}
.rd-day-item,
.rd-day-week {
    width: 14%;
    text-align: center;
}
.rd-day-text {
    display: inline-block;
    line-height: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    box-sizing: border-box;
    cursor: pointer;
    &.unavailable {
        color: #ccc;
        cursor: not-allowed;
    }
    &.out-month {
        color: #ccc;
    }
    &.selected {
        border: 1px solid #2db7f5;
        color: #2db7f5;
    }
    &:hover {
        background-color: #c4edff;
    }
}
.rd-datepicker-value > .rd-timepicker-container {
    border: none;
    padding: 0;
    min-width: initial;
    width: 3.2rem;
    .rd-timepicker-value-input {
        width: 100%;
    }
    .rd-datepicker-clear {
        display: none;
    }
}
.rd-datepicker-value-input {
    border: 0;
    height: 100%;
    outline: 0;
    font-size: .8rem;
    margin-right: .5rem;
}
.rd-datepicker-info-month,
.rd-datepicker-info-year {
    position: relative;
    width: 50%;
    text-align: center;
    .rd-datepicker-arrow {
        display: none;
        position: absolute;
        cursor: pointer;
    }
    &:hover {
        .rd-datepicker-arrow {
            display: initial;
        }
    }
}
.rd-datepicker-year-text,
.rd-datepicker-month-text {
    cursor: pointer;
}
.rd-datepicker-arrow.ion-ios-arrow-left {
    left: .5rem;
}
.rd-datepicker-arrow.ion-ios-arrow-right {
    right: .5rem;
}
.rd-datepicker-content {
    border: 1px solid #f3f3f3;
    position: absolute;
    left: 0;
    top: 2rem;
    z-index: 2;
}
.rd-datepicker-contrl {
    display: flex;
    background-color: #e6e6e6;
    padding: 0 .5rem;
}
.rd-datepicker-clear {
    position: absolute;
    top: 0;
    right: .3rem;
}
.rd-datepicker-footer {
    display: flex;
    justify-content: space-between;
    padding: .5rem;
    border-top: 1px solid #e9e9e9;
    background-color: #fff;
}
.rd-datepicker-value {
    display: flex;
}
@keyframes pickerFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -1rem, 0);
    transform: translate3d(0, -1rem, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes pickerFadeOutUp {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -1rem, 0);
    transform: translate3d(0, -1rem, 0);
  }
}
.picker-fade-in-down-transition {
  animation-duration: .2s;
  animation-fill-mode: both;
}
.picker-fade-in-down-enter {
    animation-name: pickerFadeInDown;
}
.picker-fade-in-down-leave {
    animation-name: pickerFadeOutUp;
}
</style>
<template>
    <div 
        class="rd-datepicker-container"
        :class="{
            'top': state.position === 'top',
            'open': state.pickerShow,
            'disabled': date.disabled
        }"
    >
        <div class="rd-datepicker-value" @click.stop="togglePicker">
            <div class="rd-datepicker-value-input">
                {{valueDisplay}}
            </div>
            <i 
                @click.stop="clearValue" 
                class="rd-datepicker-clear ion-close-circled"
                v-show="state.pickerShow"
            ></i>
        </div>
        <div class="rd-datepicker-content" v-show="state.pickerShow" v-el:picker transition="picker-fade-in-down">
            <div class="rd-datepicker-contrl">
                <div class="rd-datepicker-info-year">
                    <span class="rd-datepicker-arrow ion-ios-arrow-left" @click.stop="moveYear(false)"></span>
                    <span class="rd-datepicker-year-text" @click.stop="toggleView('year')">{{timeTmp.year}}</span>
                     <span class="rd-datepicker-arrow ion-ios-arrow-right" @click.stop="moveYear(true)"></span>
                </div>
                <div class="rd-datepicker-info-month">
                    <span class="rd-datepicker-arrow ion-ios-arrow-left" @click.stop="moveMonth(false)"></span>
                    <span class="rd-datepicker-month-text" @click.stop="toggleView('month')">{{timeTmp.month}}</span>
                    <span class="rd-datepicker-arrow ion-ios-arrow-right" @click.stop="moveMonth(true)"></span>
                </div>
            </div>
            <div class="rd-datepicker-days" v-show="state.dayListShow">
                <div class="rd-day-week" v-for="item in weekList">{{item}}</div>
                <div class="rd-day-item" v-for="day in dayList">
                    <span 
                        class="rd-day-text"
                        :class="{ 
                            'selected': day.selected,
                            'out-month': !day.inMonth,
                            'unavailable': day.unavailable
                        }"
                        @click.stop="touchDay($event, day)"
                    >{{day.value}}</span>
                </div>
            </div>
            <div class="rd-datepicker-list" v-if="state.monthListShow">
                <div 
                    class="rd-datepicker-list-item" 
                    v-for="item in monthList" 
                    @click.stop="setMonth(item)"
                >
                    <span class="rd-datepicker-list-item-text">{{item}}</span>
                </div>
            </div>
            <div class="rd-datepicker-list" v-if="state.yearListShow" @scroll="scrollingYear">
                <div 
                    class="rd-datepicker-list-item" 
                    v-for="item in yearList" 
                    @click.stop="setYear(item)"
                >
                    <span class="rd-datepicker-list-item-text">{{item}}</span>
                </div>
            </div>
            <div class="rd-datepicker-footer">
                <div>
                    <rd-timepicker 
                        v-if="state.timePickerShow" 
                        :time-picker="timeTmp.time" 
                        @change="timeChange"
                    ></rd-timepicker>
                </div>
                <div>
                    <rd-button @click="confirm" size="small" type="primary">确认</rd-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import rdButton from '../basic/button.vue'
import rdTimepicker from './timePicker.vue'

import {
    pad,
    catIn
} from '../utils'

const getNearMonth = (time) => {
    return {
        pre: moment(moment(time).add(-1, 'months')),
        next: moment(moment(time).add(1, 'months'))
    }
}

const generateDayList = (time, currentMonth = false) => {
    let dayList = []
    const dayCount = moment(time).daysInMonth()
    for (let i = 1; i < dayCount + 1; i++) {
        dayList.push({
            time: moment(moment(time).get('year') + '-' + pad(moment(time).get('month') + 1) + '-' + pad(i)),
            value: i,
            selected: false,
            unavailable: false,
            inMonth: currentMonth
        })
    }
    return dayList
}

const generateShowList = (time) => {
    const nearMonth = getNearMonth(time)
    const currentDayList = generateDayList(time, true)
    const nextList = generateDayList(nearMonth.next)
    const preList = generateDayList(nearMonth.pre)
    let firstDayAtWeek = moment(time).date(1).day()
    if (firstDayAtWeek === 0) firstDayAtWeek = 7

    for (let i = preList.length - 1; i > preList.length - firstDayAtWeek; i--) {
        currentDayList.unshift(preList[i])
    }
    const listCount = 35 - currentDayList.length
    for (let i = 0; i < listCount; i++) {
        currentDayList.push(nextList[i])
    }
    return currentDayList
}

const generateYearList = (year) => {
    let years = []
    for (let i = 5; i > 0; i--) {
        years.push(year - i)
    }
    years.push(year)
    for (let i = 1; i < 5; i++) {
        years.push(Math.floor(year) + i)
    }
    return years
}

const selectByValue = (list, value) => {
    list.forEach(day => {
        if (day.inMonth && day.value === value) {
            day.selected = true
        }
    })
}

const weekLimit = (list, availables) => {
    list.map(day => {
        if (availables.indexOf(Math.floor(day.time.format('d'))) === -1) {
            day.unavailable = true
        }
    })
}

export default {
    props: {
        date: {
            type: Object
        },
        limit: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            state: {
                autoHide: false,
                timePickerShow: true,
                dayListShow: true,
                pickerShow: false,
                monthListShow: false,
                yearListShow: false,
                position: 'bottom'
            },
            timeTmp: {
                time: {
                    value: '',
                    placeHolder: ''
                },
                current: null,
                year: '2016',
                month: '06'
            },
            options: {
                autoPosition: true,
                position: 'bottom',
                quickClose: true,
                placeHolder: '请选择时间',
                timePicker: false,
                format: 'YYYY-MM-DD',
                monthList: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                weekList: ['一', '二', '三', '四', '五', '六', '日']
            },
            weekList: [],
            dayList: [],
            monthList: [],
            yearList: []
        }
    },
    computed: {
        valueDisplay () {
            let str = this.date.value
            if (!str) {
                return this.options.placeHolder
            }
            return str
        }
    },
    ready () {
        this.init()
        window.addEventListener('click', this.hide, false)
    },
    mounted () {
        this.init()
        window.addEventListener('click', this.hide, false)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.hide)
    },
    components: {
        rdTimepicker,
        rdButton
    },
    methods: {
        hide (e) {
            if (!catIn(e.target, this.$el)) {
                this.state.pickerShow = false
            }
        },
        init (current) {
            if (this.date.options) {
                for (let key in this.date.options) {
                    this.options[key] = this.date.options[key]
                }
            }
            this.state.timePickerShow = this.options.timePicker
            this.state.position = this.options.position
            this.weekList = this.options.weekList
            this.monthList = this.options.monthList
        },
        parse (value, format = 'YYYY-MM-DD') {
            let current = moment(Date.parse(value))
            if (moment(Date.parse(value)).format(format) === 'Invalid date') {
                current = moment()
            }
            this.timeTmp.current = current
            this.updateData(current.get('date'))
        },
        yearDisplay () {
            this.timeTmp.year = moment(this.timeTmp.current).get('year')
        },
        monthDisplay () {
            this.timeTmp.month = moment(this.timeTmp.current).get('month') + 1
        },
        toggleView (view) {
            this.state.dayListShow = false
            this.state.monthListShow = false
            this.state.yearListShow = false

            switch (view) {
            case 'day':
                this.state.dayListShow = true
                break
            case 'month':
                this.state.monthListShow = true
                break
            case 'year':
                this.state.yearListShow = true
                this.yearList = generateYearList(this.timeTmp.year)
                break
            default:
                this.state.dayListShow = true
                break
            }
        },
        setMonth (month) {
            const index = this.monthList.indexOf(month)
            this.timeTmp.current = moment(this.timeTmp.current).set('month', index)
            this.updateData()
            this.toggleView('day')
        },
        setYear (year) {
            this.timeTmp.current = moment(this.timeTmp.current).set('year', year)
            this.updateData()
            this.toggleView('day')
        },
        moveYear (next) {
            if (next) {
                this.timeTmp.current = moment(this.timeTmp.current).add(1, 'year')
            } else {
                this.timeTmp.current = moment(this.timeTmp.current).add(-1, 'year')
            }
            this.updateData()
        },
        moveMonth (next) {
            if (next) {
                this.timeTmp.current = moment(this.timeTmp.current).add(1, 'months')
            } else {
                this.timeTmp.current = moment(this.timeTmp.current).add(-1, 'months')
            }
            this.updateData()
        },
        scrollingYear (e) {
            const $el = e.target
            const childHeight = $el.getElementsByClassName('rd-datepicker-list-item')[0].offsetHeight
            if ($el.scrollTop < childHeight) {
                let topYear = this.yearList[0]
                for (let i = -1; i > -3; i--) {
                    this.yearList.unshift(topYear + i)
                }
                $el.scrollTop = 2 * childHeight
            }
            if ($el.scrollHeight - $el.scrollTop < $el.offsetHeight + childHeight) {
                let topYear = this.yearList[this.yearList.length - 1]
                for (let i = 1; i < 3; i++) {
                    this.yearList.push(topYear + i)
                }
                $el.scrollTop = $el.scrollHeight - 2 * childHeight
            }
        },
        updateData (selectValue) {
            let list = generateShowList(this.timeTmp.current, selectValue)
            if (selectValue) {
                selectByValue(list, selectValue)
            }
            if (this.options.limit) {
                if (this.options.limit.weekDay) {
                    weekLimit(list, this.options.limit.weekDay.availables)
                }
                if (this.options.limit.customerLimit) {
                    list.forEach(day => {
                        if (this.options.limit.customerLimit(day)) {
                            day.unavailable = true
                        }
                    })
                }
            }
            this.dayList = list
            this.yearDisplay()
            this.monthDisplay()
        },
        togglePicker (e) {
            if (this.date.disabled) return
            if (this.options.autoPosition) {
                if (this.$el.getBoundingClientRect().top < 320) {
                    this.state.position = 'bottom'
                } else {
                    this.state.position = 'top'
                }
            }
            this.parse(this.date.value, this.options.format)
            this.state.pickerShow = !this.state.pickerShow
        },
        clearDay () {
            this.dayList.map(day => {
                day.selected = false
                return day
            })
        },
        clearValue (e) {
            this.date.value = ''
            this.date.rawDate = {}
            this.clearDay()
        },
        touchDay (e, day) {
            if (day.unavailable) return
            this.clearDay()
            day.selected = true
            if (this.state.timePickerShow) {
                if (!this.timeTmp.time.value) {
                    let now = new Date()
                    this.timeTmp.time.value = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds())
                }
            } else {
                this.output(day)
            }
        },
        timeChange (time) {
            this.dayList.forEach(day => {
                if (day.selected) {
                    let tmp = moment(day.time).format('YYYY-MM-DD')
                    this.date.value = moment(Date.parse(tmp + ' ' + time.value)).format('YYYY-MM-DD HH:mm:ss')
                }
            })
        },
        output (day) {
            if (!this.state.timePickerShow) {
                this.date.rawDate = moment(day.time)
                this.date.value = this.date.rawDate.format(this.options.format)
                if (this.options.quickClose) {
                    this.togglePicker()
                }
            } else {
                const tmp = moment(day.time).format('YYYY-MM-DD')
                this.date.rawDate = moment(Date.parse(tmp + ' ' + this.timeTmp.time.value))
                this.date.value = this.date.rawDate.format(this.options.format)
            }
            this.$emit('update', this.date)
        },
        confirm () {
            this.dayList.forEach(day => {
                if (day.selected) {
                    this.output(day)
                }
            })
            this.state.pickerShow = false
        }
    }
}
</script>