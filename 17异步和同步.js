// 异步 （callback 回调函数）
console.log(1000)
setTimeout(() => {
    console.log(2000)
}, 1000)
console.log(3000)
console.log(4000)
// 1000  3000  4000 2000  依次输出

// 同步
console.log(100)
alert(200)
console.log(300)
// 100 等待200点击完成  300