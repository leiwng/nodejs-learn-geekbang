console.log('hello commonJS')

exports.hello = 'world'

exports.add = function (a, b) {
    return a + b
}

exports.geekbang = { hello: 'world' }

setTimeout(() => {
    console.log('1000 Timeout -> exports')
    console.log(exports)

    module.exports = function minus(a, b) {
        return a - b
    }
}, 1000)

setTimeout(() => {
    console.log('2000 Timeout -> exports')
    console.log(exports)
}, 2000)

setTimeout(() => {
    exports.add_after = function (a, b) {
        return a * b
    }
    console.log('3000 Timeout: exports.add_after -> exports')
    console.log(exports)
}, 3000)

setTimeout(() => {
    console.log(exports)
    console.log('6000 Timeout -> exports')
    console.log(exports)
}, 6000)
