<style lang="scss">
@import '../../sass/index';
.rd-datepicker-container {
    position: relative;
    border: 1px solid $border-color-base;
    display: inline-block;
    min-width: 6rem;
    border-radius: $border-radius-base;
    height: 2rem;
    line-height: 2rem;
    padding: 0 2rem 0 .5rem;
    vertical-align: bottom;
    &.top .rd-datepicker-content {
        top: initial;
        bottom: 2rem;
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
}
.rd-day-text:hover {
    background-color: #c4edff;
}
.rd-day-text.selected {
    border: 1px solid #2db7f5;
    color: #2db7f5;
}
.rd-day-text.out-month {
    color: #ccc;
}
.rd-datepicker-value-input {
    border: 0;
}
.rd-datepicker-contrl {
    display: flex;
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
}
.rd-datepicker-contrl {
    background-color: #e6e6e6;
    padding: 0 .5rem;
}
</style>
<template>
    <div 
        class="rd-datepicker-container"
        :class="{ 'top': state.position === 'top' }"
    >
        <div class="rd-datepicker-value" @click="togglePicker">
            <input class="rd-datepicker-value-input" type="text" v-model="value">
        </div>
        <div class="rd-datepicker-content" v-show="state.pickerShow">
            <div class="rd-datepicker-contrl">
                <div class="rd-datepicker-info-year">
                    <span class="rd-datepicker-arrow ion-ios-arrow-left" @click="moveYear(false)"></span>
                    <span class="rd-datepicker-year-text" @click="toggleView('year')">{{timeTmp.year}}</span>
                     <span class="rd-datepicker-arrow ion-ios-arrow-right" @click="moveYear(true)"></span>
                </div>
                <div class="rd-datepicker-info-month">
                    <span class="rd-datepicker-arrow ion-ios-arrow-left" @click="moveMonth(false)"></span>
                    <span class="rd-datepicker-month-text" @click="toggleView('month')">{{timeTmp.month}}</span>
                    <span class="rd-datepicker-arrow ion-ios-arrow-right" @click="moveMonth(true)"></span>
                </div>
            </div>
            <div class="rd-datepicker-days" v-show="state.dayListShow">
                <div class="rd-day-week" v-for="item in weekList">{{item}}</div>
                <div class="rd-day-item" v-for="day in dayList">
                    <span 
                        class="rd-day-text"
                        :class="{ 
                            'selected': day.selected,
                            'out-month': !day.inMonth
                        }"
                        @click="touchDay($event, day)"
                    >{{day.value}}</span>
                </div>
            </div>
            <div class="rd-datepicker-list" v-if="state.monthListShow">
                <div 
                    class="rd-datepicker-list-item" 
                    v-for="item in monthList" 
                    @click="setMonth(item)"
                >
                    <span class="rd-datepicker-list-item-text">{{item}}</span>
                </div>
            </div>
            <div class="rd-datepicker-list" v-if="state.yearListShow" @scroll="scrollingYear">
                <div 
                    class="rd-datepicker-list-item" 
                    v-for="item in yearList" 
                    @click="setYear(item)"
                >
                    <span class="rd-datepicker-list-item-text">{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import { pad } from '../utils.js'

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
    const listCount = 42 - currentDayList.length
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

export default {
    props: {
        value: {
            type: String,
            required: true
        },
        options: {
            type: Object,
            default: {
                format: 'YYYY-MM-DD',
                monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                weekList: ['一', '二', '三', '四', '五', '六', '日']
            }
        }
    },
    data () {
        return {
            state: {
                dayListShow: true,
                pickerShow: false,
                monthListShow: false,
                yearListShow: false,
                position: 'bottom'
            },
            timeTmp: {
                current: null,
                year: '2016',
                month: '06'
            },
            weekList: [],
            dayList: [],
            monthList: [],
            yearList: []
        }
    },
    ready () {
        this.parse(this.value, this.options.format)
    },
    methods: {
        init (current) {
            this.weekList = this.options.weekList || ['一', '二', '三', '四', '五', '六', '日']
            this.monthList = this.options.monthList || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            this.dayList = generateShowList(current)
            this.timeTmp.current = current
            this.updateData()
        },
        parse (value, format = 'YYYY-MM-DD') {
            let current = moment(value)
            if (moment(value).format(format) === 'Invalid date') {
                current = moment()
            }
            this.init(current)
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
        updateData () {
            this.dayList = generateShowList(this.timeTmp.current)
            this.yearDisplay()
            this.monthDisplay()
        },
        togglePicker (e) {
            if (e.clientY + document.body.scrollTop + 320 > document.body.offsetHeight) {
                this.state.position = 'top'
            } else {
                this.state.position = 'bottom'
            }
            this.state.pickerShow = !this.state.pickerShow
        },
        clearDay () {
            this.dayList.map(day => {
                day.selected = false
                return day
            })
        },
        touchDay (e, day) {
            this.clearDay()
            day.selected = true
            this.togglePicker(e)
            this.output(day)
        },
        output (day) {
            this.value = moment(day.time).format('YYYY-MM-DD')
        }
    }
}
</script>