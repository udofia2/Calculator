const Convert = require('./parse');
const Run = require('./stack');
const Prefix = require('./toPrefix');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`please provide your mathetical expression
example case is 2+2+4
type here: `, expression => {
    let conResult = Convert(expression);
    let preResult = Prefix(conResult);
    let runResult = Run(preResult)
    if(runResult.length < 1 || runResult.length > 1 || expression.length < 2){
        console.log('please provide the mathetical expression as shown in the example above')
        rl.close()
    } else {
        console.log(runResult);
        rl.close()
    }
})
