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
}
.rd-datepicker-days {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    width: 12rem;
    font-size: .8rem;
}
.rd-day-item {
    width: 14%;
    text-align: center;
}
.rd-day-text:hover {
    background-color: #2db7f5;
    color: #fff;
}
</style>
<template>
    <div class="rd-datepicker-container">
        <div class="rd-datepicker-days">
            <div class="rd-day-item" v-for="day in dayList">
                <span class="rd-day-text">{{day.value}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'

const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
        return '0' + val
    }
    return val
}

const getNearMonth = (time) => {
    let month = moment(time).get('month')
    return {
        pre: moment(month - 1),
        next: moment(month + 1)
    }
}

const generateDayList = (time, currentMonth = false) => {
    let dayList = []
    const dayCount = moment(time).daysInMonth()
    for (let i = 1; i < dayCount + 1; i++) {
        dayList.push({
            value: i,
            selected: false,
            inMonth: currentMonth
        })
    }
    return dayList
}

const generateShowList = (time) => {
    const firstDayAtWeek = moment(time).day()
    const nearMonth = getNearMonth(time)

    const currentDayList = generateDayList(time, true)
    const nextList = generateDayList(nearMonth.next)
    const preList = generateDayList(nearMonth.pre)

    for (let i = preList.length - 1; i > preList.length - firstDayAtWeek + 1; i--) {
        currentDayList.unshift(preList[i])
    }
    const listCount = 42 - currentDayList.length
    for (let i = 0; i < listCount; i++) {
        currentDayList.push(nextList[i])
    }

    return currentDayList
}

export default {
    data () {
        return {
            state: {
                dayListShow: false
            },
            dayList: []
        }
    },
    ready () {
        pad(8)
        let current = moment()
        this.dayList = generateShowList(current)
    }
}
</script>