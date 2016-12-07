function throttle (func, wait) {
    var ctx, args, rtn, timeoutID
    var last = 0;

    return function throttled() {
        ctx = this;
        args = arguments;
        var delta = new Date() - last;
        if (!timeoutID)
            if (delta >= wait) call();
            else timeoutID = setTimeout(call, wait - delta);
        return rtn;
    };

    function call() {
        timeoutID = 0;
        last = +new Date();
        rtn = func.apply(ctx, args);
        ctx = null;
        args = null;
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

function debounce (func, wait, immediate) {
    var timeout
    return function () {
        var context = this,
            args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
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

const _ = {
    on (el, type, handler) {
        el.addEventListener(type, handler, false)
    },
    off (el, type, handler) {
        el.addEventListener(type, handler, false)
    }
}

export {
    _,
    ICON_MAP,
    debounce,
    throttle,
    pad,
    catIn
}
