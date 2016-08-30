import {
    rdLoadingbar
} from '../index'

export default (Vue, $root) => {
    Vue.set($root, 'RADON_LOADING_BAR', {
        percent: 0,
        options: {
            canSuccess: true,
            color: 'rgb(143, 255, 199)',
            failedColor: 'red',
            show: false,
            height: '2px'
        }
    })
    Vue.component('rd-loadingbar', rdLoadingbar)

    Vue.prototype.$Loading = {
        timer: null,
        cut: 0,
        start (time) {
            if (!time) time = 3000
            $root.RADON_LOADING_BAR.percent = 0
            $root.RADON_LOADING_BAR.options.show = true
            $root.RADON_LOADING_BAR.options.canSuccess = true
            this.cut = 10000 / Math.floor(time)
            this.timer = setInterval(() => {
                this.increase(this.cut * Math.random())
                if ($root.RADON_LOADING_BAR.percent > 95) {
                    this.finish()
                }
            }, 100)
        },
        set (num) {
            $root.RADON_LOADING_BAR.options.show = true
            $root.RADON_LOADING_BAR.options.canSuccess = true
            $root.RADON_LOADING_BAR.percent = Math.floor(num)
        },
        get () {
            return Math.floor($root.RADON_LOADING_BAR.percent)
        },
        increase (num) {
            $root.RADON_LOADING_BAR.percent = $root.RADON_LOADING_BAR.percent + Math.floor(num)
        },
        decrease (num) {
            $root.RADON_LOADING_BAR.percent = $root.RADON_LOADING_BAR.percent - Math.floor(num)
        },
        hide () {
            clearInterval(this.timer)
            this.timer = null
            setTimeout(() => {
                $root.RADON_LOADING_BAR.options.show = false
                Vue.nextTick(() => {
                    setTimeout(() => {
                        $root.RADON_LOADING_BAR.percent = 0
                    }, 100)
                })
            }, 800)
        },
        finish () {
            $root.RADON_LOADING_BAR.percent = 100
            this.hide()
        },
        failed () {
            $root.RADON_LOADING_BAR.options.canSuccess = false
            $root.RADON_LOADING_BAR.percent = 100
            this.hide()
        }
    }
}
