function throttle (callback, limit) {
    var wait = false
    return function () {
        if (!wait) {
            callback.call()
            wait = true
            setTimeout(function () {
                wait = false
            }, limit)
        }
    }
}

const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
        return '0' + val
    }
    return val + ''
}

const ICON_MAP = {
    'success': 'ion-checkmark-circled',
    'failed': 'ion-close-circled',
    'warning': 'ion-alert-circled',
    'info': 'ion-information-circled',
    'loading': 'ion-load-a'
}

const catIn = function (target, parent) {
    let path = []
    let parentNode = target
    while (parentNode && parentNode !== document.body) {
        path.push(parentNode)
        parentNode = parentNode.parentNode
    }
    return path.indexOf(parent) !== -1
}

export {
    ICON_MAP,
    throttle,
    pad,
    catIn
}
