function woof(str) {
    if (typeof str !== 'string') {
        return
    }
    return str + "woof!";
}

module.exports = woof