const prefix = (value) => {
    let result = []
    value.map(e => {
        if(typeof e === 'number') {
            result.push(e)
        } else {
            result.unshift(e)
        }
    })
    return result
}
module.exports = prefix;