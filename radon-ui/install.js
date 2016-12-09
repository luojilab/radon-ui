import modalIntall from './plugin/modal'
import loadingBarInstall from './plugin/loading-bar'
import notificationInstall from './plugin/notification'
import previewInstall from './plugin/preview'

module.exports.install = function (Vue, options = {
    Modal: true,
    Notification: true,
    Preview: true,
    LoadingBar: true
}) {
    const RADON_EVENT_BUS = new Vue({
        data: {
            RADON_NOTIFICATION: [],
            RADON_PREVIEW: {
                show: false,
                current: {
                    title: '',
                    src: ''
                },
                list: []
            },
            RADON_LOADING_BAR: {
                percent: 0,
                options: {
                    canSuccess: true,
                    color: 'rgb(143, 255, 199)',
                    failedColor: 'red',
                    show: false,
                    height: '2px'
                }
            },
            RADON_MODAL: {
                show: false,
                title: '',
                content: '',
                rawContent: '',
                cancel: () => {},
                confirm: () => {},
                large: false,
                cancelButton: {
                    show: true,
                    type: '',
                    text: '取消'
                },
                confirmButton: {
                    show: true,
                    type: 'primary',
                    text: '确定'
                }
            }
        }
    })

    const RadonInit = (vm) => {
        Vue.prototype.$RADON_EVENT_BUS = vm
        window.RADON_EVENT_BUS = vm

        if (options.Modal) {
            modalIntall(Vue, vm)
        }

        if (options.Notification) {
            notificationInstall(Vue, vm)
        }

        if (options.LoadingBar) {
            loadingBarInstall(Vue, vm)
        }

        if (options.Preview) {
            previewInstall(Vue, vm)
        }
    }

    Vue.prototype.cov = function () {
        console.log(this)
    }

    RadonInit(RADON_EVENT_BUS)
}
