const arr = [10, 20, 30, 40]

// pop 方法用于删除并返回数组的最后一个元素。  并对原数组有影响！！！
const popRes = arr.pop()
console.log(popRes, arr)

// shift 方法用于删除并返回数组的第一个元素。  并对原数组有影响！！！
const shiftRes = arr.shift()
console.log(shiftRes, arr)

// push 添加一个新数据到结尾 并返回数组新长度    并对原数组有影响！！！
const pushRes = arr.push(50) // 返回 length
console.log(pushRes, arr)

// unshift添加一个新数据到首部 并返回数组新长度    并对原数组有影响！！
const unshiftRes = arr.unshift(5) // 返回 length
console.log(unshiftRes, arr)

//以上方法对原数组有影响

// 纯函数：1. 不改变源数组（没有副作用）；2. 返回一个数组
const arr = [10, 20, 30, 40]

// concat
const arr1 = arr.concat([50, 60, 70])    //返回一个新数组 并且合并原数组[10, 20, 30, 40, 50, 60, 70]
// map
const arr2 = arr.map(num => num * 10)    // [100,200,300,400]
// filter
const arr3 = arr.filter(num => num > 25) //[30,40]
// slice
const arr4 = arr.slice(0, 1)                 //[10] 从已有的数组中返回选定的元素

// 非纯函数
// push pop shift unshift
// forEach
// some every
// reduce

const arr = [10, 20, 30, 40, 50]

// slice 纯函数
const arr1 = arr.slice()       //原数组
const arr2 = arr.slice(1, 4)   //从下标1开始截取 截取四个 [20,30,40,50]
const arr3 = arr.slice(2)     //从下标2开始截取 截取到最后
const arr4 = arr.slice(-3)    //截取倒数三个

// splice 非纯函数
const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')  //把20和30截取出来并返回一个新数组   并将 a b c 插入到20 30 的位置
// const spliceRes1 = arr.splice(1, 2)
// const spliceRes2 = arr.splice(1, 0, 'a', 'b', 'c')
console.log(spliceRes, arr) // spliceRes= [20,30]   arr=[10.'a','b','c',40,50]

const res = [10, 20, 30].map(parseInt)
console.log(res) //[10,NaN,NaN]

// 拆解
[10, 20, 30].map((num, index) => {
    console.log(num)
    console.log(index)
    return parseInt(num, index)
    //相当与 parseInt(10, 0)    parseInt(20, 1)    parseInt(30, 2)
})