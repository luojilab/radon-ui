import rdLoadingbar from '../components/global/loadingbar.vue'

export default (Vue, vm) => {
    Vue.component('rd-loadingbar', rdLoadingbar)

    Vue.prototype.$Loading = {
        timer: null,
        cut: 0,
        start (time) {
            if (!time) time = 3000
            vm.RADON_LOADING_BAR.percent = 0
            vm.RADON_LOADING_BAR.options.show = true
            vm.RADON_LOADING_BAR.options.canSuccess = true
            this.cut = 10000 / Math.floor(time)
            this.timer = setInterval(() => {
                this.increase(this.cut * Math.random())
                if (vm.RADON_LOADING_BAR.percent > 95) {
                    this.finish()
                }
            }, 100)
        },
        set (num) {
            vm.RADON_LOADING_BAR.options.show = true
            vm.RADON_LOADING_BAR.options.canSuccess = true
            vm.RADON_LOADING_BAR.percent = Math.floor(num)
        },
        get () {
            return Math.floor(vm.RADON_LOADING_BAR.percent)
        },
        increase (num) {
            vm.RADON_LOADING_BAR.percent = vm.RADON_LOADING_BAR.percent + Math.floor(num)
        },
        decrease (num) {
            vm.RADON_LOADING_BAR.percent = vm.RADON_LOADING_BAR.percent - Math.floor(num)
        },
        hide () {
            clearInterval(this.timer)
            this.timer = null
            setTimeout(() => {
                vm.RADON_LOADING_BAR.options.show = false
                Vue.nextTick(() => {
                    setTimeout(() => {
                        vm.RADON_LOADING_BAR.percent = 0
                    }, 100)
                })
            }, 800)
        },
        finish () {
            vm.RADON_LOADING_BAR.percent = 100
            this.hide()
        },
        failed () {
            vm.RADON_LOADING_BAR.options.canSuccess = false
            vm.RADON_LOADING_BAR.percent = 100
            this.hide()
        }
    }
}
