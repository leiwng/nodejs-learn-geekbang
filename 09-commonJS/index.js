console.log('start require')
var lib = require('./lib.js')
console.log('end require')
console.log(lib.add)

lib.additional = 'test'

setTimeout(() => {
    console.log('4000 Timeout -> lib')
    lib.additional2 = 'test'
    console.log(lib)
}, 4000)

// webpack command line
// webpack --devtool none --mode development --target node index.js