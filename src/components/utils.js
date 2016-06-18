function now () {
    return new Date().getTime()
}

function debounce (func, wait, immediate) {
    console.log('run')
    var timeout, args, context, timestamp, result
    if (!wait) wait = 100

    function later () {
        var last = now() - timestamp

        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function debounced () {
        context = this
        args = arguments
        timestamp = now()
        var callNow = immediate && !timeout
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }

        return result
    }
}

const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
        return '0' + val
    }
    return val
}

exports.debounce = debounce
exports.pad = pad

