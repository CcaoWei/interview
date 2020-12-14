// const div1 = document.getElementById('div1')
// console.log('div1', div1)

// const divList = document.getElementsByTagName('div') // 集合
// console.log('divList.length', divList.length)
// console.log('divList[1]', divList[1])

// const containerList = document.getElementsByClassName('container') // 集合
// console.log('containerList.length', containerList.length)
// console.log('containerList[1]', containerList[1])

// const pList = document.querySelectorAll('p')
// console.log('pList', pList)

// const pList = document.querySelectorAll('p')
// const p1 = pList[0]

// // property 形式
// p1.style.width = '100px'
// console.log( p1.style.width )
// p1.className = 'red'
// console.log( p1.className )
// console.log(p1.nodeName)
// console.log(p1.nodeType) // 1

// // attribute
// p1.setAttribute('data-name', 'imooc')
// console.log( p1.getAttribute('data-name') )
// p1.setAttribute('style', 'font-size: 50px;')
// console.log( p1.getAttribute('style') )


const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 新建节点
const newP = document.createElement('p')
newP.innerHTML = 'this is newP'
// 插入节点
div1.appendChild(newP)

// 移动节点
const p1 = document.getElementById('p1')
div2.appendChild(p1)

// 获取父元素
console.log(p1.parentNode)

// 获取子元素列表
const div1ChildNodes = div1.childNodes
console.log(div1.childNodes)
const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child => {
    if (child.nodeType === 1) {
        return true
    }
    return false
})
console.log('div1ChildNodesP', div1ChildNodesP)

div1.removeChild(div1ChildNodesP[0])

// 一下子创建一个列表并插入body时 用createDocumentFragment 创建文档片段，然后再统一插入节点中
const list = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment()

for (let i = 0; i < 20; i++) {
    const li = document.createElement('li')
    li.innerHTML = `List item ${i}`

    // 先插入文档片段中
    frag.appendChild(li)
}

// 都完成之后，再统一插入到 DOM 结构中
list.appendChild(frag)

console.log(list)
