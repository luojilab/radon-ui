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

// var throttle = function (fn, delay, mustRunDelay = 100) {
//     var timer = null
//     var tStart
//     return function () {
//         let context = this
//         let args = arguments
//         let tCurr = +new Date()
//         clearTimeout(timer)
//         if (!tStart) {
//             tStart = tCurr
//         }
//         if (tCurr - tStart >= mustRunDelay) {
//             fn.apply(context, args)
//             tStart = tCurr
//         } else {
//             timer = setTimeout(function () {
//                 fn.apply(context, args)
//             }, delay)
//         }
//     }
// }

const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
        return '0' + val
    }
    return val
}

exports.throttle = throttle
exports.pad = pad

