const run = (code) => {
    const operations = {
        '+': (a,b) => a + b,
        '*': (a,b) => a * b,
        '-': (a,b) => a - b,
        '/': (a,b) => a/b
    }
    return code.reduceRight((stack, cur) => {
        if(typeof cur === 'number') {
            stack.push(cur);
            return stack;
        } 
        else if(cur in operations) {
            let num1 = stack.pop();
            let num2 = stack.pop();
            let opC = operations[cur];
            let maths = opC(num1, num2)
            stack.push(maths);
            return stack;
        }
        return stack
    }, [])
}

module.exports = run
