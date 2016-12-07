import {
    rdLoadingbar
} from '../index'

export default (Vue, data, global) => {
    data.data['RADON_LOADING_BAR'] = {
        percent: 0,
        options: {
            canSuccess: true,
            color: 'rgb(143, 255, 199)',
            failedColor: 'red',
            show: false,
            height: '2px'
        }
    }

    Vue.component('rd-loadingbar', rdLoadingbar)

    Vue.prototype.$Loading = {
        timer: null,
        cut: 0,
        start (time) {
            if (!time) time = 3000
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent = 0
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.options.show = true
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.options.canSuccess = true
            this.cut = 10000 / Math.floor(time)
            this.timer = setInterval(() => {
                this.increase(this.cut * Math.random())
                if (global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent > 95) {
                    this.finish()
                }
            }, 100)
        },
        set (num) {
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.options.show = true
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.options.canSuccess = true
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent = Math.floor(num)
        },
        get () {
            return Math.floor(global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent)
        },
        increase (num) {
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent = global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent + Math.floor(num)
        },
        decrease (num) {
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent = global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent - Math.floor(num)
        },
        hide () {
            clearInterval(this.timer)
            this.timer = null
            setTimeout(() => {
                global.RADON_EVENT_BUS.RADON_LOADING_BAR.options.show = false
                Vue.nextTick(() => {
                    setTimeout(() => {
                        global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent = 0
                    }, 100)
                })
            }, 800)
        },
        finish () {
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent = 100
            this.hide()
        },
        failed () {
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.options.canSuccess = false
            global.RADON_EVENT_BUS.RADON_LOADING_BAR.percent = 100
            this.hide()
        }
    }
}
