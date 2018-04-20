const {log, ensure} = require('./utils')

// 数组元素拼接为字符串
function join(delimiter, array) {
    var str = "";
    array.forEach(function(ele, index){
        if(index > 0){
            str += delimiter;
        }
        str += ele;
    })
    return str;
}

function test_join() {
    ensure(join("#", ["hello", "gua"]) === "hello#gua", "join 测试1");
    ensure(join(" ", ["hello", "gua"]) === "hello gua", "join 测试2");
    ensure(join("\n", ["multi", "line", "string"]) === "multi\nline\nstring", "join 测试3");
}
test_join();