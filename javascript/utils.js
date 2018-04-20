var log = function () {
    console.log.apply(console, arguments)
}

var ensure = function (condition, message) {
    if (condition) {
        console.log(message, ': 测试成功')
    } else {
        console.log(message, ': 测试失败')
    }
}

module.exports = {log, ensure}