
const Run = require('./stack');
const preResult = require('./toPrefix')

const convert = (value) => {
    let arr = []
    let expression = [...value]  
    expression.map(a => parseInt(a)? arr.push(parseInt(a)) : arr.push(a));
    return arr
}

module.exports = convert