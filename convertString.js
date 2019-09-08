
const Run = require('./stack');
const preResult = require('./toPrefix')

let a = "2*3+4+2"
const convert = (value) => {
    let arr = []
    value = [...a]  
    value.map(a => parseInt(a)? arr.push(parseInt(a)) : arr.push(a));
    return arr
}

let conResult = convert(a)
let prefix = preResult(conResult)
let runResult = Run(prefix)
console.info(runResult)