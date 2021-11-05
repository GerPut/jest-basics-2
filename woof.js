function woof(str) {
    if (typeof str !== 'string') {
        return null
    }
    return str.length + "woof!";
}

module.exports = woof