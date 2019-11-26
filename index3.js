function fn(a) {
    return function (b) {
        return a+b;
    }
}
console.log(fn(1)(2));
// 原型 原型
// 大幅范德萨大个